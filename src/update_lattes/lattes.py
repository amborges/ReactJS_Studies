import urllib.request as urlreq
import pandas as pd
from bs4 import BeautifulSoup

csv = pd.read_csv("member_list_lattes.csv", names=["urllattes", "team_name", "lattescode"])

members_updated = []

#para cada pessoa existente no arquivo
for index, row in csv.iterrows():
	
	#captura os dados principais da página de resumo do lattes
	page = urlreq.urlopen("https://buscatextual.cnpq.br/buscatextual/preview.do?metodo=apresentar&id={}".format(row.lattescode))
	htmled = page.read().decode('latin-1')
	
	#salva os dados para revisão futura
	with open("html/data_{}.html".format(row.lattescode), "w") as f:
		f.write(htmled)
	
	#recarrega os dados
	with open("html/data_{}.html".format(row.lattescode), "r") as htmlfile:
		htmled = htmlfile.read()
	
	#capturando as informações da página html
	soup = BeautifulSoup(htmled, 'html.parser')
	
	#obtendo o resumo pt-br do lattes
	search = soup.select("input[name*=resumo]")
	user_resume = str(search[0]).split("value=")[1][1:-3]
	
	#obtendo o nome do autor
	search = [str(s) for s in soup.select("script")]
	for s in search:
		if "var nome" in s:
			user_name = s.split("var nome")[1]
			user_name = user_name.split("';")[0]
			user_name = user_name[4:]
	
	#finalmente, criando a imagem do usuário
	#MUDAR: tentar baixar a imagem pra não ficar requisitando toda hora a imagem
	user_img = "http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id={}".format(row.lattescode)
	
	#gerando os dados atualizados de cada membro
	members_updated.append({'name'     : user_name,
	                        'team_name': row.team_name,
	                        'lattes'   : row.urllattes,
	                        'image'    : user_img,
	                        'resume'   : user_resume})

init_text="export function getMembers(){\n\tconst team_members = ["
end_text="]\n\treturn team_members;\n}"

with open("team_members.js", "w") as f:
	f.write(init_text)
	for i in range(len(members_updated)):
		mid_text = "name:'{}', team_name:{}, lattes:'{}', image:'{}', resume:'{}'".format(members_updated[i]['name'],
		                                                                                  members_updated[i]['team_name'],
		                                                                                  members_updated[i]['lattes'],
		                                                                                  members_updated[i]['image'],
		                                                                                  members_updated[i]['resume'])
		if i < len(members_updated) - 1:
			f.write("{" + mid_text + "}, ")
		else:
			f.write("{" + mid_text + "}")
	f.write(end_text)
