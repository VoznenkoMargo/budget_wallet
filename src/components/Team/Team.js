import { Box } from '@mui/system';
import s from './Team.module.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Team() {
  const team = [
    {
      img: '',
      name: 'MARGARITA VOZNENKO',
      position: 'Team Lead',
      githubLink: '',
      linkedInLink: '',
    },
    {
      img: '',
      name: 'ANASTASIA KAPROSH',
      position: 'Scrum Master',
      githubLink: '',
      linkedInLink: '',
    },
    {
      img: '',
      name: 'KATERINA KISIV',
      position: 'Developer',
      githubLink: '',
      linkedInLink: '',
    },

    {
      img: '',
      name: 'ARTEM MATIUSHENKO',
      position: 'Developer',
      githubLink: '',
      linkedInLink: '',
    },

    {
      img: 'https://picua.org/images/2021/09/06/79fd3016aadfbbee93809e662e729c6a.jpg',
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

              <b className={s.devName}>{i.name}</b>
              <p className={s.position}>{i.position}</p>
              <ul className={s.socialLink}>
                <li className={s.linkItem}>
                  <a
                    href={(i.githubLink, s.link)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubIcon width="22px" height="22px" />
                  </a>
                </li>
                <li className={s.linkItem}>
                  <a
                    href={(i.linkedInLink, s.link)}
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
