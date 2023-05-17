import axios from 'axios';
import testData from '../helpers/testData.json';

let bookingID: String;

const headers = {
  Accept: 'application/json',
  Authorization: 'Basic YWRtaW46cGFzc3dvcmQxMjM=',
};

const baseUrl = 'https://restful-booker.herokuapp.com/booking/';

describe('Booking tests', () => {
  test('Ping returns 201', async () => {
    const response = await axios.get(
      'https://restful-booker.herokuapp.com/ping',
    );
    expect(response.status).toBe(201);
    expect(response.data.length).toBeGreaterThan(0);
    expect(response.data).toContain('Created');
  });

  test('Can get all booking IDs', async () => {
    const response = await axios.get(baseUrl);
    expect(response.status).toBe(200);
    expect(response.data.length).toBeGreaterThan(0);
  });

  test('Can create new booking', async () => {
    const response = await axios.post(baseUrl, testData.user, { headers });
    expect(response.status).toBe(200);
    expect(response.data.booking).toEqual(testData.user);
    bookingID = response.data.bookingid;
  });

  test('Can get filtered booking IDs by name', async () => {
    const response = await axios.get(
      `${baseUrl}?firstname${testData.user.firstname}&lastname=${testData.user.lastname}`,
    );
    expect(response.data).toEqual(
      expect.arrayContaining([{ bookingid: bookingID }]),
    );
  });

  test('Can get booking by ID', async () => {
    const response = await axios.get(`${baseUrl}${bookingID}`, { headers });
    expect(response.status).toBe(200);
    expect(response.data).toEqual(testData.user);
  });

  test('Can update booking', async () => {
    const response = await axios.put(
      `${baseUrl}${bookingID}`,
      testData.updatedUser,
      { headers },
    );
    expect(response.status).toBe(200);
    expect(response.data).toEqual(testData.updatedUser);
  });

  test('Can partially update booking', async () => {
    const response = await axios.patch(
      `${baseUrl}${bookingID}`,
      testData.partiallyUpdatedUser,
      { headers },
    );
    expect(response.status).toBe(200);
    expect(response.data.totalprice).toEqual(
      testData.partiallyUpdatedUser.totalprice,
    );
    expect(response.data.additionalneeds).toEqual(
      testData.partiallyUpdatedUser.additionalneeds,
    );
    expect(response.data.depositpaid).toEqual(
      testData.partiallyUpdatedUser.depositpaid,
    );
    expect(response.data.bookingdates).toEqual(
      testData.partiallyUpdatedUser.bookingdates,
    );
  });

  test('Can delete booking', async () => {
    const response = await axios.delete(`${baseUrl}${bookingID}`, { headers });
    expect(response.status).toBe(201);
  });

  test('After booking is deleted, 404 is returned', async () => {
    await expect(axios.get(`${baseUrl}${bookingID}`)).rejects.toThrow(
      expect.objectContaining({
        response: expect.objectContaining({ status: 404 }),
      }),
    );
  });
});
