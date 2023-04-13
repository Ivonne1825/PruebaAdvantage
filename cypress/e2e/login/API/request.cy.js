//687dd909f1708468274d3e0d28822dea1890be6d7fd8310a8e1d87090eaa7dd5
//https://gorest.co.in/public/v2/users

const token = "687dd909f1708468274d3e0d28822dea1890be6d7fd8310a8e1d87090eaa7dd5"

const endPoint = "https://gorest.co.in/public/v2/users"

describe("API TEST", () => {
    
    it('Post method request', () => {
        cy.request({ 
            method : 'POST',
            url : endPoint,
            headers : {
                'Authorization' : 'Bearer ' + token 
            },
            body: {
                "name": 'Lucia Castro',
                "email": 'kkkkk@gmail.com',
                'gender': 'female',
                'status':  'active'
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.name).to.eq('Lucia Castro')
            expect(response.body.email).to.eq('kkkkk@gmail.com')
            expect(response.body.gender).to.eq('female')
            expect(response.body.status).to.eq('active')
        })
    })
})