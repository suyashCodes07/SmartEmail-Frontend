import axios from 'axios';

const BACKEND_URL = "http://localhost:8080/api/email/generate";

class GeminiService {
  async generateEmailReply(originalEmail, tone) {
    try {
      const response = await axios.post(BACKEND_URL, {
        originalEmail,
        tone
      });

      return response.data;
    } catch (error) {
      console.error("Backend Error:", error);
      throw new Error('Failed to generate email reply.');
    }
  }
}

export default new GeminiService();
