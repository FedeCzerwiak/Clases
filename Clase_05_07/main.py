'''
clientes = [{'Nombre': 'Hector','Apellido': 'Guzman', 'DNI': 100},{'Nombre': 'Juan', 'Apellido': 'Gonzalez', 'DNI': 101}]
'''

class Cliente: 
    def __init__(self, DNI, Nombre, Apellido):
        self.DNI = DNI
        self.Nombre = Nombre
        self.Apellido = Apellido
        self.Banco = 'Santander'
    
    def __str__(self):
        #'{} {}' para concatenar
        return '{} {}'.format(self.Nombre, self.Apellido)
        #return f'{self.Nombre} {self.Apellido}'

class Empresa:
    def __init__(self, clientes = []):
        self.clientes = clientes

    def mostrar_clientes(self, DNI):
        for c in self.clientes:
            if c.DNI == DNI: 
                return c

cliente1 = Cliente(102, 'Pablo', 'Ramirez')  
cliente2 = Cliente(103, 'Fede', 'Czerwiak') 

empresa1 = Empresa(clientes = [cliente1, cliente2])

print(empresa1.mostrar_clientes(102))


'''
lista_clientes = [cliente1, cliente2]     


print(clientes[1]['Apellido'])
print(cliente1.Apellido)
print(lista_clientes[1].Apellido)
print(cliente1.Banco)
'''



