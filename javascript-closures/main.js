function graduate(credential) {

  return function (fullName) {
    console.log(fullName + ', ' + credential);
  };

}
const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

medicalSchool('David Gonzalez');
lawSchool('David Gonzalez');