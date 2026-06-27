export const judgeService = {
  async judge(councilOutput) {
    return { score: 0, feedback: `Judged: ${councilOutput}` };
  },
};
