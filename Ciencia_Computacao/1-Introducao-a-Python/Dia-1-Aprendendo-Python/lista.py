altura= [1.75, 1.90, 1.62, 1.59, 1.85, 1.77, 1.95, 1.55, 1.62]

print (altura[0]) #pega primeiro item da lista

#print (altura[-1]) #pega ultimo item da lista
#print(altura[0:4:1]) #fatiamento ---para pegar os 4 primeiros itens do array ( 0= primeiro item, 4= quantidade do array, 1= quantidade passos) 
#print(altura[4::1])
#print(altura[::-1]) # fatiamento de tras para frente

nome= "Daniele"

print(nome[::-1])

# verifica na lista altura tem a altura 1.62

if 1.62 in altura:
    print('Achei o dono da calça')

# ordena a lista do mais baixo ao mais alto

#altura.sort()
#print(altura)

# se precisar salvar numa variavel, utilizar o sorted
lista_ordenada = sorted(nome)
print(lista_ordenada)
print(altura)

# pega o primeiro e ultimo item da lista e salva em duas variaveis

a, *b, c = altura #o asterisco salva os demais itens   #DESEMPACOTAMENTO
print(a)
print(c)


# uma lista de lista
nova_lista = [["Daniele", 1.75], ["Marcos", 1.9]]

for item in nova_lista:
    print(item[0], item[1])

# aplicando desempacotamento no for

for nome, altura in nova_lista:
    print(nome, altura)

#usando dicionario

dicionario = dict()
for nome, altura in nova_lista:
    dicionario[nome] = altura

print(dicionario)

# mesmo jeito porem direto em uma linha apenas

dicionario2 = {nome: altura for nome, altura in nova_lista}
print(dicionario2)
# começou com o que queria incluir nesse dicionario(nome,altura), como vai fazer isso que é pelo for, e indica que estrutura vai ser utilizada no casa { bigode} 

fruits = ["laranja", "maça", "uva", "abacaxi"]

print(fruits[0])
print(fruits[-1])
fruits.append("banana")
fruits.remove("abacaxi")
fruits.extend(["pera", "melão", "kiwi"])
print(fruits.index("maça"))
fruits.sort()
print(fruits)
