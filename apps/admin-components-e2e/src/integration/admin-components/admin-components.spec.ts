describe('admin-components: AdminComponents component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=admincomponents--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to AdminComponents!');
    });
});
