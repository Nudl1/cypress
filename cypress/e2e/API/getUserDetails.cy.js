describe('GET Request - Fetch Users', () => {
    it('should fetch users', () => {
      cy.request('GET', 'https://gorest.co.in/public/v2/users').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.statusText).to.eq('OK');
        expect(response.headers['content-type']).to.exist;
        expect(response.headers['date']).to.exist;
        expect(response.duration).to.be.lessThan(300);
      });
    });
  });