import axiosClient from './axiosClient';

export interface Survey {
  id: number;
  title: string;
  description: string;
  image: string | null;
  category: string;
  status: 'active' | 'inactive';
  startDate: string;
  endDate: string | null;
  totalResponses: number;
  createdAt: string;
  updatedAt: string;
}

export interface SurveyQuestion {
  id: number;
  surveyId?: number;
  question: string;
  type: 'text' | 'multiple_choice' | 'multiple-choice' | 'rating' | 'checkbox';
  options: any[] | null;
  required: boolean;
  order?: number;
}

export interface SurveyDetail extends Survey {
  questions: SurveyQuestion[];
}

export interface CandidateOption {
  text: string;
  imageUrl?: string;
  imageUrls?: string[];
  description?: string;
}

export interface SurveyResponse {
  surveyId: number;
  responses: {
    questionId: number;
    answer: string | string[];
  }[];
}

class SurveyApiService {
  /**
   * Get all public active surveys
   */
  async getPublicSurveys(): Promise<Survey[]> {
    try {
      const response = await axiosClient.get<{ surveys: Survey[] }>('/surveys/public');
      return response.surveys || [];
    } catch (error) {
      console.error('Error fetching public surveys:', error);
      return [];
    }
  }

  /**
   * Get survey by ID with questions (public endpoint)
   */
  async getSurveyById(id: string | number): Promise<SurveyDetail | null> {
    try {
      const response = await axiosClient.get<{ survey: SurveyDetail }>(`/surveys/public/${id}`);

      if (!response.survey) {
        return null;
      }

      // Get API base URL for image conversion
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL?.replace('/api', '') || '';

      // Convert relative image paths to absolute URLs
      const survey = response.survey;
      if (survey.image && !survey.image.startsWith('http')) {
        survey.image = `${apiBaseUrl}${survey.image}`;
      }

      // Convert question option images to absolute URLs
      if (survey.questions) {
        survey.questions = survey.questions.map((question) => {
          if ((question.type === 'multiple_choice' || question.type === 'multiple-choice') && question.options) {
            const convertedOptions = question.options.map((option: any) => {
              if (typeof option === 'object') {
                const converted = { ...option };

                // Handle single imageUrl
                if (converted.imageUrl && !converted.imageUrl.startsWith('http')) {
                  converted.imageUrl = `${apiBaseUrl}${converted.imageUrl}`;
                }

                // Handle multiple imageUrls
                if (converted.imageUrls && Array.isArray(converted.imageUrls)) {
                  converted.imageUrls = converted.imageUrls.map((img: string) =>
                    img.startsWith('http') ? img : `${apiBaseUrl}${img}`
                  );
                }

                return converted;
              }
              return option;
            });

            return { ...question, options: convertedOptions };
          }
          return question;
        });
      }

      return survey;
    } catch (error) {
      console.error('Error fetching survey:', error);
      return null;
    }
  }

  /**
   * Submit survey response
   */
  async submitResponse(data: SurveyResponse): Promise<boolean> {
    try {
      await axiosClient.post('/surveys/public/responses', data);
      return true;
    } catch (error) {
      console.error('Error submitting survey response:', error);
      return false;
    }
  }
}

// Export singleton instance
export const surveyApi = new SurveyApiService();

// Export the class for testing purposes
export default SurveyApiService;
