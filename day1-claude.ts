import * as dotenv from "dotenv";
import Anthropic from "@anthropic-ai/sdk";

// load environment variables from .env file
dotenv.config();

// create the anthropic client
const client = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY
})

async function talkToClaude() {
    console.log('Taling to claude...\n')

    // Make first API call to Claude
    const message = await client.messages.create({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1024,
        messages: [
            {
                role: 'user',
                content:'Explain quantum computing in one sentence'
            }
        ]

    })
    // Extract the response from the message
    const response = message.content[0];
    if(response && response.type === 'text'){
        console.log('Claude says:\n');
        console.log(response.text);
        console.log('\n✅ Success! You just talked to AI.');
    }
}

talkToClaude().catch(error => {
    console.error('Error:', error.message);
});