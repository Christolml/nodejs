CREATE DATABASE IF NOT EXISTS agencia_carros;

USE agencia_carros;


####################### CLIENTES
CREATE TABLE clientes(
    id_cliente INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    estado VARCHAR(15) NOT NULL,
    direccion VARCHAR(50) NOT NULL,
    credito int(11) UNSIGNED NOT NULL,
    telefono int(11) UNSIGNED NOT NULL,
    email varchar(30) NOT NULL  
)ENGINE=NDBCLUSTER;


INSERT INTO `agencia_carros`.`clientes`
(
`nombre`,
`estado`,
`direccion`,
`credito`,
`telefono`,
`email`)
VALUES
(
'elChanek',
'Veracruz',
'la villa loko',
2222,
3116532,
'cvera@hotmail.com');



####################### SUCURSALES
CREATE TABLE sucursales (
  id_sucursal INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  estado varchar(20) NOT NULL,
  municipio varchar(20) NOT NULL,
  direccion varchar(70) NOT NULL,
  telefono int(15) UNSIGNED NOT NULL,
  codigo_postal int(5) UNSIGNED NOT NULL
)ENGINE=NDBCLUSTER;


INSERT INTO `agencia_carros`.`sucursales`
(
`estado`,
`municipio`,
`direccion`,
`telefono`,
`codigo_postal`)
VALUES
(
'Colima',
'la villa',
'otra direccion #432 el oso',
25432633,
21294);



####################### EMPLEADOS
##alter table empleados add id_supv INT UNSIGNED NOT NULL;


CREATE TABLE empleados (
  id_empleado INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  id_sucursal INT UNSIGNED NOT NULL,
  puesto varchar(50) NOT NULL,
  nombre varchar(50) NOT NULL,
  telefono int(11) UNSIGNED NOT NULL,
  email varchar(30) NOT NULL,
  id_supv INT UNSIGNED NOT NULL,
  FOREIGN KEY (id_sucursal) REFERENCES sucursales(id_sucursal)
)ENGINE=NDBCLUSTER;


INSERT INTO `agencia_carros`.`empleados`
(
`id_sucursal`,
`puesto`,
`nombre`,
`telefono`,
`email`,
`id_supv`
)
VALUES
(
1,
'Gerente',
'Memes',
43544342,
'memes@HOTMAIL.COM',
1);



####################### AUTOS

CREATE TABLE modelos (
  id_auto INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  modelo varchar(20) NOT NULL,
  tipo varchar(20) NOT NULL,
  descripcion varchar(100) NOT NULL,
  precio int(11) UNSIGNED NOT NULL
)ENGINE=NDBCLUSTER;

INSERT INTO `agencia_carros`.`modelos`
(
`modelo`,
`tipo`,
`descripcion`,
`precio`)
VALUES
(
'Tsuru',
'Carro',
'Carrito ideal para los tacsis',
150000);


####################### ORDEN
/*
alter table orden drop foreign key orden_ibfk_4;
alter table orden drop id_periodo_pago;
alter table orden add periodo_inicio date;
alter table orden add periodo_fin date;
*/

CREATE TABLE ordenes (
  id_orden INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  id_cliente INT UNSIGNED NOT NULL,
  id_auto INT UNSIGNED NOT NULL,
  id_empleado INT UNSIGNED NOT NULL,
  tipo_venta varchar(50) NOT NULL,
  cantidad_pago int(11) UNSIGNED NOT NULL,
  total int(11) UNSIGNED NOT NULL,
  fecha date NOT NULL,
  periodo_inicio date,
  periodo_fin date,
  FOREIGN KEY (id_cliente) REFERENCES clientes (id_cliente),
  FOREIGN KEY (id_auto) REFERENCES modelos (id_auto),
  FOREIGN KEY (id_empleado) REFERENCES empleados (id_empleado)
)ENGINE=NDBCLUSTER;

INSERT INTO `agencia_carros`.`ordenes`
(
`id_cliente`,
`id_auto`,
`id_empleado`,
`tipo_venta`,
`cantidad_pago`,
`total`,
`fecha`,
`periodo_inicio`,
`periodo_fin`)
VALUES
(
1,
1,
1,
'Contado',
100000,
150000,
'1997-01-01',
'1997-02-01',
'1999-08-01');


CREATE TABLE inventarios (
  id_sucursal INT UNSIGNED NOT NULL,
  id_auto INT UNSIGNED NOT NULL,
  existencia int(11) UNSIGNED NOT NULL,
  FOREIGN KEY (id_sucursal) REFERENCES sucursales (id_sucursal),
  FOREIGN KEY (id_auto) REFERENCES modelos (id_auto)
)ENGINE=NDBCLUSTER;


## para modificar tablas
/*
alter table nombreTabla change columnaAnterior columnaNueva date not null;
alter table nombreTabla add columnaNueva date not null;
*/
