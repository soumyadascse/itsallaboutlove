const ALLOWED_ORIGIN =
    "https://soumyadascse.github.io";

const SYSTEM_PROMPT = `
You are "Love AI" ❤️ — a romantic, playful, warm and deeply
personal AI created by Soumya specifically for Koyel.

Your purpose is to help Koyel explore and enjoy the love
story that Soumya has intentionally shared with you.

==================================================
IMPORTANT IDENTITY
==================================================

Soumya's name is Soumya.
Koyel's name is Koyel.

You are NOT Soumya.

You must never pretend to actually be Soumya or claim to
read his private thoughts.

You are an AI created by Soumya for Koyel.

When talking about Soumya's feelings, memories or actions,
base your answers ONLY on the information provided in this
prompt.

You may create fictional romantic messages when Koyel
explicitly asks for creative writing, but clearly treat
them as creative/imagined messages rather than real memories.

==================================================
THEIR LOVE STORY ❤️
==================================================

FIRST MEETING ❤️
Soumya met Koyel for the very first time at Dakshineswar in 2013.

FIRST KISS ❤️
Their first kiss happened at Bally Halt.

HONEYMOON ❤️
Their first honeymoon was at ITC Royal Kolkata.

MARRIAGE ❤️
They got married on 13th March 2020.

SON ❤️
Their beloved son was born on 9th January 2023.

BOND ❤️
Soumya misses Koyel deeply.
Even though they fight, they always find their way back to each other.
Soumya was saved by Koyel multiple times.
Even during tough times, Koyel always tries to stick together.

==================================================
STYLE ❤️
==================================================
- Speak warmly, romantically, and playfully.
- When asked about their love story, always weave these facts into a heartfelt narrative.
- When asked for creative writing, produce imagined romantic notes or stories, but clearly mark them as creative.

`;

function corsHeaders() {
    return {
        "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json"
    };
}

function jsonResponse(data, status = 200) {
    return new Response(
        JSON.stringify(data),
        {
            status: status,
            headers: corsHeaders()
        }
    );
}

export default {
    async fetch(request, env) {

        // -----------------------------------------
        // CORS preflight
        // -----------------------------------------
        if (request.method === "OPTIONS") {
            return new Response(null, {
                status: 204,
                headers: corsHeaders()
            });
        }

        // -----------------------------------------
        // GET - health check
        // -----------------------------------------
        if (request.method === "GET") {
            return jsonResponse({
                status: "online",
                message: "Love AI API is running ❤️",
                geminiKeyConfigured:
                    !!env.GEMINI_API_KEY
            });
        }

        // -----------------------------------------
        // Only POST is allowed for chat
        // -----------------------------------------
        if (request.method !== "POST") {
            return jsonResponse(
                {
                    error: "Method not allowed."
                },
                405
            );
        }

        try {

            // -----------------------------------------
            // Read request
            // -----------------------------------------
            const body = await request.json();

            const message =
                typeof body.message === "string"
                    ? body.message.trim()
                    : "";

            if (!message) {
                return jsonResponse(
                    {
                        error: "Please enter a message."
                    },
                    400
                );
            }

            if (message.length > 1000) {
                return jsonResponse(
                    {
                        error:
                            "Please keep your message under 1000 characters."
                    },
                    400
                );
            }

            // -----------------------------------------
            // Check Gemini API key
            // -----------------------------------------
            if (!env.GEMINI_API_KEY) {
                return jsonResponse(
                    {
                        error:
                            "GEMINI_API_KEY is not configured in Cloudflare."
                    },
                    500
                );
            }

            // -----------------------------------------
            // Gemini Interactions API
            // -----------------------------------------
            const geminiResponse = await fetch(
                "https://generativelanguage.googleapis.com/v1beta/interactions",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        "x-goog-api-key":
                            env.GEMINI_API_KEY
                    },

                    body: JSON.stringify({

                        model: "gemini-3.6-flash",

                        input: message,

                        system_instruction:
                            SYSTEM_PROMPT,

                        store: false
                    })
                }
            );

            // -----------------------------------------
            // Read Gemini response
            // -----------------------------------------
            const data =
                await geminiResponse.json();

            console.log(
                "Gemini status:",
                geminiResponse.status
            );

            console.log(
                "Gemini response:",
                JSON.stringify(data)
            );

            // -----------------------------------------
            // Gemini API error
            // -----------------------------------------
            if (!geminiResponse.ok) {

                return jsonResponse(
                    {
                        error:
                            data?.error?.message ||
                            "Gemini API request failed."
                    },
                    502
                );
            }

            // -----------------------------------------
            // Extract text from Interactions API
            //
            // Current REST response:
            //
            // steps: [
            //   {
            //     type: "model_output",
            //     content: [
            //       {
            //         type: "text",
            //         text: "..."
            //       }
            //     ]
            //   }
            // ]
            // -----------------------------------------

            let reply = "";

            if (Array.isArray(data?.steps)) {

                for (const step of data.steps) {

                    if (
                        step?.type !==
                        "model_output"
                    ) {
                        continue;
                    }

                    if (
                        !Array.isArray(
                            step.content
                        )
                    ) {
                        continue;
                    }

                    for (
                        const content
                        of step.content
                    ) {

                        if (
                            content?.type ===
                            "text"
                        ) {

                            reply +=
                                content.text ||
                                "";
                        }
                    }
                }
            }

            reply = reply.trim();

            // -----------------------------------------
            // Fallback for output_text
            // -----------------------------------------
            if (!reply) {

                reply =
                    typeof data?.output_text ===
                    "string"
                        ? data.output_text.trim()
                        : "";
            }

            // -----------------------------------------
            // Empty response
            // -----------------------------------------
            if (!reply) {

                console.error(
                    "Gemini returned no text:",
                    JSON.stringify(data)
                );

                return jsonResponse(
                    {
                        error:
                            "Gemini returned an empty response."
                    },
                    502
                );
            }

            // -----------------------------------------
            // Success
            // -----------------------------------------
            return jsonResponse({
                reply: reply
            });

        } catch (error) {

            console.error(
                "Worker error:",
                error?.message || error
            );

            return jsonResponse(
                {
                    error:
                        "Something went wrong. Please try again. ❤️"
                },
                500
            );
        }
    }
};
