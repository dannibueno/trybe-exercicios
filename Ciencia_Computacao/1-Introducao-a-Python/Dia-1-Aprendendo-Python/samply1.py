age=40

print(age)

names = ['Dani', 'Marcos', 'Zara']


# TRANSFORMANDO A LISTA DE ALTURAS EM MEDIDAS PÉS

altura= [1.75, 1.90, 1.62, 1.59, 1.85, 1.77, 1.95, 1.55, 1.62]
altura_pes = [
    round(alt * 3.28, 1)
    if alt > 1.70 else 0
    for alt in altura
    ]
print(altura_pes)