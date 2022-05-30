enum permissao {
    ADMIN = "admin",
    USER = "user"
}

type User = {
    name:string,
    email:string,
    permissao:permissao
}

const users:User[] = [
	{name: "Rogério", email: "roger@email.com", permissao: permissao.USER},
	{name: "Ademir", email: "ademir@email.com", permissao: permissao.ADMIN},
	{name: "Aline", email: "aline@email.com", permissao: permissao.USER},
	{name: "Jéssica", email: "jessica@email.com", permissao: permissao.USER},  
	{name: "Adilson", email: "adilson@email.com", permissao: permissao.USER},  
	{name: "Carina", email: "carina@email.com", permissao: permissao.ADMIN}      
]
