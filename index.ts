class Departamento {
  nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  getName() {
    return this.nombre;
  }
}
class Piso {
  nombre: string;
  departamentos: Departamento[] = [];
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  pushDepartamento(departamento: Departamento) {
    this.departamentos.push(departamento);
  }
  getDepartamentos(): Departamento[] {
    return this.departamentos;
  }
}
class Edificio {
  pisos: Piso[];
  constructor(pisos: Piso[]) {
    this.pisos = pisos;
  }
  addDepartamentoToPiso(nombreDePiso: string, departamento: Departamento) {
    const pisoEncontrado = this.pisos.find((p) => p.nombre == nombreDePiso);
    return pisoEncontrado.pushDepartamento(departamento);
  }
  getDepartamentoByPiso(nombreDePiso: string): Departamento[] {
    const pisoEncontrado = this.pisos.find((p) => p.nombre == nombreDePiso);
    return pisoEncontrado.getDepartamentos();
  }
}
//aca es un cambio para la clase
