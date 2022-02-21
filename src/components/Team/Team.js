import { Box } from '@mui/system';
import s from './Team.module.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Team() {
  const team = [
    {
      img: 'https://picua.org/images/2022/02/07/4832d1ab436032d5671d4058ca6c9cd8.jpg',
      name: 'MARHARITA VOZNENKO',
      position: 'Team Lead',
      githubLink: 'https://github.com/VoznenkoMargo',
      linkedInLink: 'https://ua.linkedin.com/in/marharyta-voznenko-6aa5b0137',
    },
    {
      img: 'https://picua.org/images/2022/02/07/3677d0fa45389cbc84f21c880bc9dfe9.jpg',
      name: 'ANASTASIA KAPROSH',
      position: 'Scrum Master',
      githubLink: 'https://github.com/nastia260600',
      linkedInLink: 'https://www.linkedin.com/in/anastasia-kaprosh-7b12331b2/',
    },
    {
      img: 'https://picua.org/images/2022/02/07/b918f8ad57e3dbecb9bb4033a55a4b99.jpg',
      name: 'KATERYNA KISIV',
      position: 'Developer',
      githubLink: 'https://github.com/Katekisiv',
      linkedInLink: 'www.linkedin.com/in/katekisiv',
    },

    {
      img: 'https://picua.org/images/2022/02/07/33352d4e4bbbc27ace88fd9db296a9a2.jpg',
      name: 'ARTEM MATIUSHENKO',
      position: 'Developer',
      githubLink: 'https://github.com/artemmatiushenko1',
      linkedInLink: 'https://www.linkedin.com/in/artem-matiushenko-83b706203/',
    },

    {
      img: 'https://picua.org/images/2022/02/21/ef271deae5e5ef97ec9e0353a8e817c9.jpg',
      name: 'DMITRIY GLEBOV',
      position: 'Developer',
      githubLink: 'https://github.com/CommanderCoolDev',
      linkedInLink: 'https://www.linkedin.com/in/dmitriy-glebov-9aa614210',
    },
  ];
  return (
    <Box
      sx={{
        paddingLeft: '30px',
        paddingTop: '30px',
        width: '100%',
        // marginLeft: '175px',
        '@media (max-width: 1160px)': {
          padding: 0,
          marginLeft: 0,
        },
      }}
    >
      <div className={s.teamDev}>
        <div className={s.devTeam}>
          <h2 className={s.devTitle}>Developer's Team</h2>
        </div>

        <ul className={s.devList}>
          {team.map((i, index) => (
            <li key={index} className={s.devItems}>
              <img src={i.img} className={s.devImg} alt="student" />

              <p className={s.devName}>{i.name}</p>
              <p className={s.position}>{i.position}</p>
              <ul className={s.socialLink}>
                <li className={s.linkItem}>
                  <a
                    className={s.link}
                    href={i.githubLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubIcon width="22px" height="22px" />
                  </a>
                </li>
                <li className={s.linkItem}>
                  <a
                    className={s.link}
                    href={i.linkedInLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedInIcon width="22px" height="22px" />
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Box>
  );
}
