Sistema Distribuido Tickets
===============================
Suponga un sistema distribuido de venta de pasajes de viajes desde un punto A hasta un punto B. Un viaje puede contener diferentes tramos. Cada tramo puede ser provisto por una empresa diferente y tiene un costo determinado. Existe un conjunto de empresas, cada una ofreciendo un conjunto de servicios de viajes. También existe un conjunto de puntos de venta. Cada punto de venta ofrece un servicio de venta a usuarios finales (clientes) de pasajes entre dos puntos, buscando todas las posibles formas de llegar desde el origen al destino (posiblemente usando diferentes empresas para cada tramo).

Herramientas requeridas
=======================
* [Node] - Install Node.js
* [Npm] - Install the Node Package Manage

[Node]: https://nodejs.org
[Npm]: https://www.npmjs.com/

Instalacion
============
- Dirigirnos al directorio:
	```
	cd Tickets 
	```
- Instale el paquete y modulos:
	```
	npm install 

	npm install body-parser 

	npm install async
	```

Correr puntos de venta
===========================
- Dirigirnos al directorio:
	```
	cd salepoint 
	```
	
- Ejecutar el punto de venta:
	``` 
	node salepointChevalier.js 
	node salepointMonticas.js 
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
Correr la App
=============
- Abrimos nuestro explorador y colocamos:  
	```
	localhost:5000 
	```
	```
	localhost:5001  
	```

