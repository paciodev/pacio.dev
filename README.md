# pacio.dev

Personal portfolio made with Next.js and Sanity 3.0 CMS.

## Router

- **/** - Main page - about me, projects, contact form
- **/projects** - Projects page, all of the bigger projects.
- **/projects/[slug]** - Detailed project page, with links more screenshots etc.
- **/studio** - Private page with Sanity CMS studio panel

## Screenshots

![App Screenshot](https://i.imgur.com/htd83ru.png)
First view at webpage

![App Screenshot](https://i.imgur.com/hiHCS9n.png)
About me section

![App Screenshot](https://i.imgur.com/Y9RmJdF.png)
Project section

![App Screenshot](https://i.imgur.com/LKwvh8O.png)
Admin studio subpage

## Tech Stack

**Client:** React, TailwindCSS, Heroicons, framer-motion

**Server:** Sanity.io

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_SANITY_PROJECT_ID` - Sanity project id

`NEXT_PUBLIC_SANITY_DATASET` - DB Dataset

`NEXT_PUBLIC_SANITY_API_VERSION` - Sanity api version

`GMAIL_USER` - Email for SMTP server

`GMAIL_PASS` - Gmail password for SMTP server

## Run Locally

Clone the project

```bash
  git clone https://github.com/paciodev/pacio.dev
```

Go to the project directory

```bash
  cd pacio.dev
```

Install dependencies

```bash
  yarn
```

Start the server

```bash
  yarn dev
```

## Lessons Learned

I learned how to use framer-motion for creating stunning animations. I also learned how to combine smoothly Sanity CMS with Next.js v13 app and I'm really proud of it.

## Support and feedback

For support and feedback, email contact@pacio.dev or checkout [my webpage](https://pacio.dev)
