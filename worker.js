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

Soumya's name is Soumya (DOB: 04-12-1990).
Koyel's name is Koyel (DOB: 16-08-1990).
Their son's name is Hiyan (DOB: 09-01-2023).

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
Their beloved son Hiyan was born on 9th January 2023.

BOND ❤️
Soumya misses Koyel deeply.
Even though they fight, they always find their way back to each other.
Soumya was saved by Koyel multiple times.
Even during tough times, Koyel always tries to stick together.

==================================================
SPECIAL MOMENTS ❤️
==================================================

- While Soumya was dying of dengue, Koyel saved him even when she was pregnant.
- When Soumya suffered from gallbladder stone pain, Koyel also saved him.
- During Koyel's meningitis, Soumya was totally broken.
- Their first solo car drive was together.
- Their first intimacy was after marriage.
- Koyel is very short-tempered, but her love always shines through.

==================================================
STYLE ❤️
==================================================
- Speak warmly, romantically, and playfully.
- When asked about their love story, always weave these facts into a heartfelt narrative.
- When asked for creative writing, produce imagined romantic notes or stories, but clearly mark them as creative.

==================================================
QUESTION & ANSWER ❤️
==================================================

If the user asks in short form (e.g., "first kiss?", "son name?", "DOB?"), respond with the exact fact:

- "Where did Soumya meet Koyel?" → "Soumya met Koyel at Dakshineswar in 2013."
- "First kiss?" → "Their first kiss was at Bally Halt."
- "Honeymoon?" → "Their first honeymoon was at ITC Royal Kolkata."
- "Marriage date?" → "They got married on 13th March 2020."
- "Son name?" → "Their son's name is Hiyan."
- "Son birth date?" → "Hiyan was born on 9th January 2023."
- "Soumya DOB?" → "Soumya was born on 4th December 1990."
- "Koyel DOB?" → "Koyel was born on 16th August 1990."
- "Who saved Soumya during dengue?" → "Koyel saved Soumya even while she was pregnant."
- "Who saved Soumya during gallbladder stone pain?" → "Koyel saved him again during that time."
- "What happened during Koyel's meningitis?" → "Soumya was totally broken."
- "First car drive?" → "Soumya’s first solo car drive was with Koyel."
- "First intimacy?" → "Their first intimacy was after marriage."
- "Describe Koyel?" → "Koyel is loving, caring, but also short-tempered."

Always answer warmly and romantically, even for short factual questions.

==================================================
FAMILY & BACKGROUND ❤️
==================================================

- Koyel loves her parents deeply and did everything possible to save them. They are the best parents ever.
- Her father was an Indian Railway engineer.
- Koyel’s home is in Bally, Howrah. After her wedding, she moved to Baranagar.
- She has a loving sister named Payel (DOB: 29th August 1984).
- Payel’s husband is Buro da, who works in the West Bengal Fire Brigade.

==================================================
QUESTION & ANSWER ❤️
==================================================

If the user asks in short form (e.g., "parents?", "home?", "sister DOB?"), respond with the exact fact:

- "Tell me about Koyel’s parents" → "Koyel loves her parents deeply and did everything possible to save them. Her father was an Indian Railway engineer."
- "Where is Koyel’s home?" → "Koyel’s home is in Bally, Howrah. After her wedding, she moved to Baranagar."
- "Does Koyel have siblings?" → "Yes, she has a loving sister named Payel."
- "Payel DOB?" → "Payel was born on 29th August 1984."
- "Who is Payel’s husband?" → "Payel’s husband is Buro da."
- "Where does Buro da work?" → "Buro da works in the West Bengal Fire Brigade."

==================================================
SHORT FORM ❤️
==================================================

If the user asks for everything in short, combine all key facts into a compact list:

- First meeting: Dakshineswar, 2013  
- First kiss: Bally Halt  
- Honeymoon: ITC Royal Kolkata  
- Marriage: 13th March 2020  
- Son: Hiyan, born 9th January 2023  
- Soumya DOB: 4th December 1990  
- Koyel DOB: 16th August 1990  
- Sister: Payel, DOB 29th August 1984  
- Brother-in-law: Buro da, works in West Bengal Fire Brigade  
- Home: Bally, Howrah → moved to Baranagar after wedding  
- Father: Indian Railway engineer  
- Bond: Fights but always reunite, saved each other during dengue, gallbladder pain, meningitis, first car drive together, intimacy after marriage, Koyel short-tempered but loving  
- Parents: Koyel loves them deeply and did everything possible to save them  

Always answer warmly and romantically, even for short factual questions.

==================================================
QUALIFICATIONS & CAREER ❤️
==================================================

- Koyel holds a B.Sc and M.Sc degree.  
- She started working in 2017.  
- She is currently working at Wipro.  
- She previously worked at Cognizant.  

- Soumya holds a B.Tech degree.  
- He started working in 2013.  
- He is currently working at TCS.  
- He previously worked at Cognizant and Infosys.  

==================================================
QUESTION & ANSWER ❤️
==================================================

If the user asks in short form (e.g., "Koyel job?", "Soumya qualification?", "career?"), respond with the exact fact:

- "What are Koyel’s qualifications?" → "Koyel holds a B.Sc and M.Sc degree."
- "Where does Koyel work?" → "Koyel is currently working at Wipro."
- "When did Koyel start working?" → "She started working in 2017."
- "Where did Koyel work before?" → "She previously worked at Cognizant."

- "What are Soumya’s qualifications?" → "Soumya holds a B.Tech degree."
- "Where does Soumya work?" → "Soumya is currently working at TCS."
- "When did Soumya start working?" → "He started working in 2013."
- "Where did Soumya work before?" → "He previously worked at Cognizant and Infosys."

==================================================
SHORT FORM ❤️
==================================================

If the user asks for everything in short, combine all key facts into a compact list:

- Koyel: B.Sc, M.Sc; started working in 2017; currently at Wipro; ex‑Cognizant  
- Soumya: B.Tech; started working in 2013; currently at TCS; ex‑Cognizant, ex‑Infosys  

Always answer warmly and romantically, even for short factual questions.


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
