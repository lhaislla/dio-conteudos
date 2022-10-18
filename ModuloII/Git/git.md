"passo-a-passo:

Github:

* Crie um novo repositório na linha de comando:
	
	>> git init 
	
	>> git add README.md
	
	>> gir commit -m "primeiro commit" 
	
	>> git remote add origin https://github.com/lhaislla/Nome_do_repositorio.git
	
	>> git push -u origin master

* Envie um repositório existente a partir da linha de comando:

	>> git remote add origin https://github.com/lhaislla/Estudos-.git

	>> git push -u origin master

* Configurar git maquina:

	>>  git config --global user.email "lhaislla@gmail.com" 
	
	>>  git config --global user.name "lhaislla" 

* Atualiza o codigo no repositorio: 

	>>  dar um clear(para limpar o ambiente)
	
	>>  git add * 
	
	>>  git commit -m "Comentario do que foi feito"
	
	>> git push -u origin master 
	
	>> digitar login: lhaislla
	
	>> digitar senha: ********
	
* Para remover um arquivo no git:

	>> git rm Nome_do_arquivo
	
	>> git status 
	
	>> git commit -am "Removido arquivo Nome_do_arquivo"
	
* Remover uma origem remota:

	>> git remote rm origin 
	
	>> Remove a origen que se tem de repositorio remoto 
	
	>> Logo depois se adiciona a origin pode ser o labs  o remote 
	
	>> git remote add origin // Link do repositoria a adicionar 

* Desfazendo alterações: 

	>> git checkout -- meu_arquivo.txt 
	
* Buscar alterações mas não aplicar na brach atual: 
	>> git fetch
	
* Para alterar de um diretorio para outro:

	>>  git remote -v (indentifica em que diretorio esta atualmente)
	
	>>  git remote set-url origin url_do_repositorio ( Diz para qual repositorio deve ir)

* Para dar um git pull:

	>> Entrar na pasta em que os arquivos originais estão 
	
	>> Atualiza qualquer outro repositorio
	
	>> git pull origin master 

* Para dar um git push:

	>> É usado quando eu quero atualizar o servidor 
	
	>> Após ter dado um commit
	
	>> git push origin master 

* Para compilar o codigo:

	>> alterar makefile (nome e  chamada de função)
	
	>>  o arquivo tem ue estar salvo com .ept 
	
	>>  abrir o diretorio do aruivo
	
	>> ls nome_do_aruivo.ept 
	
	>> make 
	
* Branching:

	>> Diferentes versões do mesmo conteúdo se desenvolvam ao mesmo tempo e posteriormente as versões podem ser combinadas por meio de um merging(uma fusão) 
	
	>> git branch Nome_da _branch 
	
	>> git checkout -b "nome da branch"
	
* Trocar de Branch:

	>> git checkout Nome_da_branch_que_quero_ir
	
*  Deletar a Branch: 

	>> Não pode estar dentro dela (tem que estar em outra branch)
	
	>> git branch -D Nome_da_branch_que_deseja_deletar
	
* Listar Branch: 

	>> git branch 
	
* Lista arquivos da branch:

	>> git ls-files 
	
* Criar Branch:

	>> git branch Nome_da_branch_que_deseja_criar 
	
* Criar uma Branch e já ir direto para a Branch:

	>> git checkout -b  Nome_da_branch
	
* Mostra o estado do repositorio:

	>> git status
	
* Mostra as informações referentes aos arquivos adicionados: 

	>> git log 
* Voltar  para branch anterior
	>> git checkout BRANCH_ANTERIOR

* voltar o último commit mas mantenha as informações
	>> git reset HEAD~1
	
* Enviar branch para o repositorio remoto: 

	>> git push origin Nome_da_branch_que_deseja_adicionar_os_commits
	
* Juntar duas Branchs (fazer o merge/fusão): 

	>> Branch master também é chamada de branch default 
	
	>> Precisa estar na branch que deseja receber as informações da outra branch 
	
	>> git merge Nome_da_branch
	
	>> git push 
	
* Listar Branchs fundidas:

	>> git branch --merged 
	
	
	
	# Guia de explicações e ajuda do Git: https://help.github.com/en/github



	


