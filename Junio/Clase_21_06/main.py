#comentario
#print('Hola Mundo')

'''
para documentar

a = 10

b = -5

c = "Hola "

print(type(0.0))

CLASE 23 06

x=7
x+=2
y=x+2

x-=2
x*=2

x=8
x%2==0

x=3
x==3
x!=4
x=3+'4' tira error

y='4'
x=3
print(x + int(y))
print(str(x) + y)

Asi no tira error
''' 

valor=int(input('Inserte un numero: ')) #si aca hago input de str se rompe, deberia validar

print(type(valor))

'''
valor=(input('Inserte un numero: ')) #asi lo toma como st
print(type(valor))
'''

if(valor<0):
    print("El numero negativo")
elif(valor>=0 and valor<=10):
    print("El numero es menor o igual que 10")
else: 
    print("El numero no es menor que 10")

if(type(valor) == int):
    print("Es un numero")

if(type(valor) is int):
    print("Es un numero")

'''
and &&
or ||
not !
'''
def nombre():
    #Instrucciones
    return 