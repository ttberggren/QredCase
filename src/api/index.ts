export async function mockDataFunction(): Promise<{
  data1: string;
  data2: string;
  data3: number;
  data4: string;
} | null> {
  const apiUrl =
    'https://c20zuamcv7.execute-api.eu-north-1.amazonaws.com/default/CaseStudy_Dum';

  try {
    const response = await fetch(apiUrl);
    // Log the response from the API even though we won't be using it
    console.log('response', JSON.stringify(response));

    // Extract data from response and create mock response
    const mockResponse = {
      data1: 'Invoice', // What kind of data, in this case an invoice
      data2: 'Tele2', // From whom
      data3: 2000, // Invoice number
      data4: '2023-04-28', // Date of when the invoice is due
    };

    // Simulate delay in network response
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Return mock response
    console.log('mockResponse', mockResponse);
    return mockResponse;
  } catch (error) {
    console.error('error!', error);
    return { data1: '', data2: '', data3: 0, data4: '' };
  }
}
