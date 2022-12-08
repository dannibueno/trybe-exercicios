# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.

def maior_numero(num1, num2):
    if num1 > num2:
        return num1
    return num2

print(maior_numero(1,2))


# 🚀 Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.

def mean(numbers_list):
    total = 0
    for number in numbers_list:
        total += number
    return total / len(numbers_list)

print(mean([3, 2]))

# 🚀 Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"], o retorno deve ser "Fernanda".

def find_biggest_name(names):
    biggest_name = names[0]
    for name in names:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name


print(find_biggest_name(["Marcos", "Daniele"]))

# Exercício 1: Dada uma lista, descubra o menor elemento. Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2.

def find_less_number(numbers):
    less_number = numbers [0];
    for number in numbers:
        if number < less_number:
            less_number = number
    return less_number

print(find_less_number([4, 4, 3]))

