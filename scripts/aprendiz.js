export var NivelEducativo;
(function (NivelEducativo) {
    NivelEducativo["BACHILLERATO"] = "Bachillerato";
    NivelEducativo["UNIVERSITARIO"] = "Universitario";
    NivelEducativo["POSGRADO"] = "Posgrado";
})(NivelEducativo || (NivelEducativo = {}));
var Aprendiz = /** @class */ (function () {
    function Aprendiz(nombres, apellidos, avatar, edad, nivelEducativo, cursos) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.avatar = avatar;
        this.edad = edad;
        this.nivelEducativo = nivelEducativo;
        this.cursos = cursos;
    }
    Aprendiz.prototype.darCursosCertificados = function () {
        var totalCursos = 0;
        for (var index = 0; index < this.cursos.length; index++) {
            var curso = this.cursos[index];
            if (curso.certificado) {
                totalCursos += 1;
            }
        }
        return totalCursos;
    };
    return Aprendiz;
}());
export { Aprendiz };
