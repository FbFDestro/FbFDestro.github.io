function createSection(jsonData) {
  let contentSection = `<section>
                          <header>
                            <h2>${jsonData.title}</h2>
                          </header>

                          <table>`;

  for (dataElement of jsonData.data) {
    contentSection += `<tr class="titulo">
                        <td class="esq destaque">${dataElement.title}</td>
                        <td class="dir">${
                          dataElement.rightTitle ? dataElement.rightTitle : ''
                        }</td>
                      </tr>`;

    if (dataElement.descriptions) {
      for (description of dataElement.descriptions) {
        contentSection += `       
                      <tr>
                        <td class="esq">${
                          description.info ? description.info : ''
                        }</td>
                        <td class="dir">${
                          description.rightInfo ? description.rightInfo : ''
                        }</td>
                      </tr>`;
      }
    }
  }

  contentSection += ` </table>
                     </section>`;

  return contentSection;
}

const main = document.getElementsByTagName('main')[0];
let sections = '';
for (item of resume) {
  sections += createSection(item);
}
main.innerHTML += sections;
