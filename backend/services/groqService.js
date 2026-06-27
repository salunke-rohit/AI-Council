export const groqService = {
  async generate(prompt) {
    return { content: `Generated response for: ${prompt}` };
  },
};
