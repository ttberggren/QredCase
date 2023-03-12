// Google Cloud Vision API URL + KEY
const API_URL = `https://vision.googleapis.com/v1/images:annotate?key=AIzaSyC1f_MDHiY8Aqh4uWmg1MInlxRVo269VRA}`;

function generateBody(image: string) {
  console.log('image in generateBody', image);
  const body = {
    requests: [
      {
        image: {
          content: image,
        },
        features: [
          {
            type: 'TEXT_DETECTION',
            maxResults: 1,
          },
        ],
      },
    ],
  };
  return body;
}
async function callGoogleVisionAsync(image: string) {
  console.log('image in callGoogleVisionAsync', image);
  const body = generateBody(image);
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const result = await response.json();
  console.log(result);
  const detectedText = result.responses[0].fullTextAnnotation;
  return detectedText
    ? detectedText
    : { text: "This image doesn't contain any text!" };
}
export default callGoogleVisionAsync;
