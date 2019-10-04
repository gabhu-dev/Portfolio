export const second = ()=>{
  const form = document.createElement('div');
  const template = `
  <h1>hola mundo 2<h1>

  `
  form.innerHTML = template;
  return form;
}