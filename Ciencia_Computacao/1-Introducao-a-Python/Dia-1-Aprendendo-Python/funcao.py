def analyze(text):
    count_words = len(text.split(" "))

    #return f"Número de palavras = {count_words}"
    # conta quantos espaços tem no texto


    #conta quantos letras tem
    char_counter = dict()
    for char in text:
        if char in char_counter:
            char_counter[char] += 1
        else:
            char_counter[char] = 1
    
    return f"Ocorrencias de caracteres = {char_counter}"

text_to_analyze = (
    "A Trybe cada dia nos ensinando uma coisa nova e mostrando de uma forma divertida"
    "a necessidade de saber sobre o que será ensinado! Ainda estamos no início, mas já"
    "vejo grandes resultados comparada comigo mesma de uma semana atrás!"
)
    
print(analyze(text_to_analyze))