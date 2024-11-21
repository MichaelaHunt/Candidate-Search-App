// TODO: Create an interface for the Candidate objects returned by the API
interface Candidate {
    username: string;//this is the login field in the response
    image: string;//avatar_url
    link: string;//html_url
    location?: string;
    email?: string;
    bio?: string;
    name?: string;
    company?: string;
}
//name, username, location, avatar, email, html url, company
