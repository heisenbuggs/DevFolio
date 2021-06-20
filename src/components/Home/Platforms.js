import React from "react";
import { Col, Container } from "react-bootstrap";
import "../../styles/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Icon } from "@iconify/react";
import codeforcesIcon from "@iconify-icons/simple-icons/codeforces";
import codechefIcon from "@iconify-icons/simple-icons/codechef";
import githubFill from "@iconify-icons/akar-icons/github-fill";
import linkedinFill from "@iconify-icons/akar-icons/linkedin-fill";
import geeksforgeeksIcon from "@iconify-icons/simple-icons/geeksforgeeks";
import leetcodeIcon from "@iconify-icons/cib/leetcode";
import hackerrankIcon from "@iconify-icons/cib/hackerrank";

const Platforms = () => {
  return (
    <Container className='platformcont'>
      <Col>
        <ul className='home-platforms-social-links'>
          <li className='social-icons'>
            <a
              href='https://github.com/itzprasuk'
              target='_blank'
              rel='noreferrer'
              className='icon-colour home-platforms-icons'
              title='GitHub'
            >
              <Icon
                icon={githubFill}
                height={32}
                width={32}
                style={{ marginBottom: 6 }}
              />
            </a>
          </li>
          <li className='social-icons'>
            <a
              href='https://www.codechef.com/users/coderprasukj'
              target='_blank'
              rel='noreferrer'
              className='icon-colour home-platforms-icons'
              title='CodeChef'
            >
              <Icon
                icon={codechefIcon}
                height={32}
                width={32}
                style={{ marginBottom: 6 }}
              />
            </a>
          </li>
          <li className='social-icons'>
            <a
              href='https://leetcode.com/itzprasuk/'
              target='_blank'
              rel='noreferrer'
              className='icon-colour home-platforms-icons'
              title='LeetCode'
            >
              <Icon
                icon={leetcodeIcon}
                height={28}
                width={28}
                style={{ marginBottom: 6 }}
              />
            </a>
          </li>
          <li className='social-icons'>
            <a
              href='https://www.linkedin.com/in/prasukjain04/'
              target='_blank'
              rel='noreferrer'
              className='icon-colour home-platforms-icons'
              title='LinkedIn'
            >
              <Icon
                icon={linkedinFill}
                height={30}
                width={30}
                style={{ marginBottom: 6 }}
              />
            </a>
          </li>
          <li className='social-icons'>
            <a
              href='https://auth.geeksforgeeks.org/user/itzprasuk/practice/'
              target='_blank'
              rel='noreferrer'
              className='icon-colour home-platforms-icons'
              title='GeeksforGeeks'
            >
              <Icon
                icon={geeksforgeeksIcon}
                height={28}
                width={28}
                style={{ marginBottom: 6 }}
              />
            </a>
          </li>
          {/* <li className="social-icons">
            <a
              href="https://codeforces.com/profile/coderprasuk"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-platforms-icons"
              title="CodeForces"
            >
              <Icon
                icon={codeforcesIcon}
                height={25}
                width={25}
                style={{ marginBottom: 6 }}
              />
            </a>
          </li> */}
          <li className='social-icons'>
            <a
              href='https://www.hackerrank.com/meprasuk?hr_r=1 '
              target='_blank'
              rel='noreferrer'
              className='icon-colour home-platforms-icons'
              title='HackerRank'
            >
              <Icon
                icon={hackerrankIcon}
                height={32}
                width={32}
                style={{ marginBottom: 6 }}
              />
            </a>
          </li>
        </ul>
      </Col>
    </Container>
  );
};

export default Platforms;
