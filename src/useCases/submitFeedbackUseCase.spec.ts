import { SubmitFeedbackUseCase } from './submitFeedbackUseCase';

const submitFeedback = new SubmitFeedbackUseCase(
  {create: async ()=> {}},
  {sendMail: async ()=>{}}
)

describe('Submit feedback', () => {
  it('should be able to submit feedback', async ()=> {
    await expect(submitFeedback.execute({
      type : 'BUG',
      comment : 'example comment',
      screenshot : 'data:image/png;base64,iweuhfiuehifh',

    })).resolves.not.toThrow();
  });
  it('should not be able to submit feedback without type', async ()=> {

    await expect(submitFeedback.execute({
      type : '',
      comment : 'example comment',
      screenshot : 'data:image/png;base64,iweuhfiuehifh',

    })).rejects.toThrow();

    
  });
  it('should not be able to submit feedback without comment', async ()=> {

    await expect(submitFeedback.execute({
      type : 'BUG',
      comment : '',
      screenshot : 'data:image/png;base64,iweuhfiuehifh',

    })).rejects.toThrow();

  });
  it('should not be able to submit feedback without comment', async ()=> {

    await expect(submitFeedback.execute({
      type : 'BUG',
      comment : 'example comment',
      screenshot : 'data:image/png;base64,iweuhfiuehifh',

    })).rejects.toThrow();

  });

  it('should not be able to submit feedback with an invalid screenshot', async ()=> {

    await expect(submitFeedback.execute({
      type : 'BUG',
      comment : 'example comment',
      screenshot : 'd123.jpg',

    })).rejects.toThrow();

  });
});