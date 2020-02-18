const resume = [
  {
    title: 'Education',
    data: [
      {
        title: 'University of São Paulo',
        rightTitle: '2017 - Dec/2021',
        descriptions: [
          {
            info: 'Bachelor of Science in Computer Science',
            rightInfo: 'GPA 8.8/10 - 4th in class (out of 127)'
          }
        ]
      },
      {
        title: 'Linköping University (Sweden)',
        rightTitle: 'Aug/2019 - Jan/2020',
        descriptions: [
          {
            info:
              'One semester studying abroad taking Computer Science courses as an exchange student.'
          }
        ]
      },
      {
        title: 'Escola Tecnica Everardo Passos (ETEP)',
        rightTitle: '2014 - 2016',
        descriptions: [
          {
            info: 'Computer Technician'
          }
        ]
      }
    ]
  },
  {
    title: 'Work Experience',
    data: [
      {
        title: 'Incoming Software Engineer Intern at Facebook (London - UK)',
        rightTitle: 'May/2020 - July/2020'
      }
    ]
  },
  {
    title: 'Major Projects',
    data: [
      {
        title: `<a href="https://github.com/FbFDestro/YourAutoLiker" target='_blank'>Your Auto Liker</a>`,
        rightTitle: '2018 - 2019',
        descriptions: [
          {
            info: `Chrome extension that automatically likes or dislikes youtube videos from 
                      selected channels when you watch them. Developed mainly with Javascript 
                      and Chrome Browser API. Published at Chrome Web Store with real users.`
          }
        ]
      },
      {
        title: `<a href="https://github.com/FbFDestro/DownloadBanker" target='_blank'>DownloadBanker</a>`,
        rightTitle: '2015 - 2016',
        descriptions: [
          {
            info: `E-commerce of authorial digital content with the goal of being an 
                      intermediary between producers and consumers.
                      The project has a Website (Asp.Net, C#, and Javascript),
                      an Android App (Java) and a Desktop Application (C#).`
          }
        ]
      },
      {
        title: `<a href="https://github.com/FbFDestro/TechFit" target='_blank'>TechFit</a>`,
        rightTitle: '2015',
        descriptions: [
          {
            info: 'Desktop gym manager developed with C# and MySQL'
          }
        ]
      },
      {
        title: `<a href="https://github.com/FbFDestro/FirstPlei" target='_blank'>FirstPlei</a>`,
        rightTitle: '2014',
        descriptions: [
          {
            info:
              'Desktop games including Sudoku, Memory Game and Tic Tac Toe developed with C#'
          }
        ]
      }
    ]
  },
  {
    title: 'Activities',
    data: [
      {
        title: 'University Teaching Assistant',
        rightTitle: 'Mar/2018 - Jun/2019',
        descriptions: [
          {
            info: `Helped professor with development and correction of tests and exercises for Introduction 
                  to Computer Science I ​ and Introduction to Computer Science: Laboratory Practice I. 
                  Gave classes for around 60 students to reinforce understanding of subjects and solve doubts.`
          }
        ]
      },
      {
        title: 'Brazilian ICPC Summer School',
        rightTitle: 'Unicamp – Jan./2018',
        descriptions: [
          {
            info: 'Two weeks training for competitive programming contests'
          }
        ]
      },
      {
        title:
          'Member at University Study Group for Programming Contests (GEMA)',
        rightTitle: 'Mar/2017 - Dec/2018',
        descriptions: [
          {
            info: 'Weekly meetings and contests to exercise problem-solving.'
          }
        ]
      }
    ]
  },
  {
    title: 'Achievements',
    data: [
      {
        title: 'ACM-ICPC South America/Brazil First Phase',
        descriptions: [
          {
            info:
              '7th place in local scoreboard/53rd place in global scoreboard out of 1556',
            rightInfo: '2018'
          },
          {
            info:
              '9th place in local scoreboard/93rd place in global scoreboard out of 873',
            rightInfo: '2017'
          }
        ]
      },
      {
        title: 'Brazilian Informatics Olympiad - OBI',
        descriptions: [
          {
            info: '76th place out of 1251 participants - University level',
            rightInfo: '2017'
          },
          {
            info:
              '40th place out of 122 participants (honorable mention) - Junior level',
            rightInfo: '2012'
          }
        ]
      }
    ]
  }
];

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