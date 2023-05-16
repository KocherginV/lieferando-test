import axios from 'axios';

let token: String;

describe('Booking tests', () => {
  beforeAll(async () => {
    const response = await axios.post(
      'https://restful-booker.herokuapp.com/auth',
      {
        username: 'admin',
        password: 'password123',
      },
    );
    token = response.data.token;
  });

  test('Ping returns 201', async () => {
    const response = await axios.get(
      'https://restful-booker.herokuapp.com/ping',
    );
    expect(response.status).toBe(201);
    expect(response.data.length).toBeGreaterThan(0);
    expect(response.data).toContain('Created');
  });

  test('Can get all booking IDs', async () => {
    const response = await axios.get(
      'https://restful-booker.herokuapp.com/booking',
    );
    expect(response.status).toBe(200);
    expect(response.data.length).toBeGreaterThan(0);
  });

  test('Can get booking by ID', async () => {
    const response = await axios.get(
      'https://restful-booker.herokuapp.com/booking/3',
    );
    expect(response.status).toBe(418);
    expect(response.data.length).toBeGreaterThan(0);
    expect(response.data).toEqual({
      firstname: 'Sally',
      lastname: 'Jackson',
      totalprice: 512,
      depositpaid: true,
      bookingdates: { checkin: '2020-03-25', checkout: '2022-02-16' },
      additionalneeds: 'Breakfast',
    });
  });
});
