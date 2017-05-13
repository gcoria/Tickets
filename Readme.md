Sistema Distribuido Tickets
===============================
Suponga un sistema distribuido de venta de pasajes de viajes desde un punto A hasta un punto B. Un viaje puede contener diferentes tramos. Cada tramo puede ser provisto por una empresa diferente y tiene un costo determinado. Existe un conjunto de empresas, cada una ofreciendo un conjunto de servicios de viajes. También existe un conjunto de puntos de venta. Cada punto de venta ofrece un servicio de venta a usuarios finales (clientes) de pasajes entre dos puntos, buscando todas las posibles formas de llegar desde el origen al destino (posiblemente usando diferentes empresas para cada tramo).

Herramientas requeridas
=======================
[Node]: https://nodejs.org
[Npm]: https://www.npmjs.com/
### Instale node de: https://nodejs.org/en/ Version v6.9.2 LTS
### Instale rpm con: rpm sudo npm install npm -g
### Verifique version con: nom -v 4.0.3

Instalacion en MAC OS
==================
### Instale body-parser con: npm install body-parser
### Instale async con: npm install async

Correr puntos de venta
===========================
- Dirigirnos al directorio:
	```
	cd salepoint 
	```
	
- Ejecutar el punto de venta:
	``` 
	node salepointArg.js 
	```
	
Correr las empresas
===========================
- Dirigirnos al directorio:
	```
	cd enterprise 
	```
	
- Ejecutar cualquiera de los servidores:
	``` 
	node serverChevalier.js 
	node serverMonticas.js
	```
### Por ultimo abrimos nuestro explorador y colocamos: localhost:5000 

