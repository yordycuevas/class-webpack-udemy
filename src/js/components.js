import '../css/components.css';

export const sayHi = (name = 'No name') => {
  console.log("Creating tag H1");
  const h1 = document.createElement("h1");

  h1.innerHTML = `Hi, ${name} !!`;

  document.body.append(h1);


};
