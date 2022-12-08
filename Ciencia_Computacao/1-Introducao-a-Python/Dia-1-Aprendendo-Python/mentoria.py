#cria lista com tupla

lista_cidade = [("Daniele", "Curitiba"), ("Marcos", "Portugal")]

# cria dicionario vazio
dicionario_cidade = {}

#Transformando lista de tuplas em dicionario

# for percorre cada tupla da lista pegando o nome colocando como chave e cidade como valor do dicionario
for nome, cidade in lista_cidade:
    dicionario_cidade[nome] = cidade

print(dicionario_cidade)

# mesmo exemplo usando compreensao de dicionarios, menos linhas
dicionario_cidade2 = {nome: cidade for nome, cidade in lista_cidade}

print(dicionario_cidade2)

# mesmo exemplo de forma menor ainda. Só funciona para max 2 itens na lista 

dicionario_cidade3 = dict(lista_cidade)
print(dicionario_cidade3)

# incluindo novo nome no dicionario

dicionario_cidade["Zara"] = "Fazendinha"
print(dicionario_cidade)

# pegando o valor

print(dicionario_cidade["Daniele"], dicionario_cidade["Marcos"])

print(dicionario_cidade.get("Daniele"))

# como pesquisar por chave

if "Daniele" in dicionario_cidade:
    print("Vou visitar ela")

# pesquisar por valor

if "Curitiba" in dicionario_cidade.values():
    print("Vou visitar essa cidade")

########################################################################

# Criando conjunto
# dicionario tem estrura de chave e valor e conjunto tem estrutura semelhante a tuplas onde tem item por item. 

conjunto = set()

conjunto.add("Santo Andre")
conjunto.add("Rio de Janeiro")
conjunto.add("Curitiba") 

print(conjunto)

conjunto2 = set({ "Rio de Janeiro", "Recife"})
print(conjunto2)

print(conjunto)
print(conjunto2)
print(conjunto.difference(conjunto2))