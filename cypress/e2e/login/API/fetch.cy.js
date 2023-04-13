const token = "687dd909f1708468274d3e0d28822dea1890be6d7fd8310a8e1d87090eaa7dd5"

const endPoint = "https://gorest.co.in/public/v2/users"

describe("API TEST", () =>  {

    it( 'Post method request', () => {
        fetch(endPoint,{
            method : 'POST',
            headers : {
                'Authorization' : 'Bearer ' + token,
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                "name": 'Lucia Castro',
                "email": 'ioc@gmail.com',
                'gender': 'female',
                'status':  'active'
            })
        }).then(
            response => response.json()
        ).then(data => {
            expect(data.name).to.eq('Lucia Castro')
            expect(data.email).to.eq('ioc@gmail.com')
            expect(data.gender).to.eq('female')
            expect(data.status).to.eq('active')
        })
    })
})