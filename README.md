# Aziz Barwaniwala Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. This portfolio showcases my skills, projects, and professional experience, and is fully synchronized with my resume.

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Theme**: Modern dark theme with neon accents
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Resume Synchronized**: All content matches my current resume exactly
- **Functional Contact Form**: EmailJS integration for direct email communication
- **GitHub Integration**: Direct links to project repositories

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email Service**: EmailJS
- **Deployment**: Vercel

## 📋 Portfolio Sections

### About Me
- Professional introduction focusing on AI, Data Science, and impactful solutions
- Education details from Manipal University Jaipur
- Current focus and vision

### Experience
- **JLL (Mumbai)**: Strategic Research Intern — Digital Infrastructure (March 2025 - June 2025)
- **Motherson Technology Services**: Project Training Intern (June 2024 - July 2024)
- **I-Class Solutions**: Junior Data Analyst Intern (April 2022 - Sept 2022)

### Projects
- **Journaling Application**: Full-stack React Native app with AI integration
- **Comment Spam Detection**: LSTM-based spam detection with full-stack deployment
- **Forklift Data Automation**: Excel automation for Australian company

### Technical Skills
- **Languages**: JavaScript (ES6+), Python, SQL, HTML/CSS
- **Web & Mobile**: React.js, Node.js, Express.js, React Native, REST APIs
- **Databases**: MongoDB, PostgreSQL (Supabase), SQLite, MySQL
- **AI/DS**: TensorFlow, pandas, NumPy, Matplotlib, Seaborn
- **Tools**: Git, GitHub, VS Code, IntelliJ, Expo, Streamlit, AWS, Power BI, Tableau

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/azizz7/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up EmailJS (for contact form):
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Create an email service (Gmail, Outlook, etc.)
   - Create an email template
   - Add environment variables to `.env.local`:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📧 Contact Form Setup

The contact form uses EmailJS to send emails directly to `azizbarwani5253@gmail.com`. To set it up:

1. **EmailJS Service**: Configure your email service (Gmail recommended)
2. **Email Template**: Create a template with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
3. **Environment Variables**: Add your EmailJS credentials to `.env.local`

## 🔄 Resume Synchronization

This portfolio is designed to stay synchronized with my resume (`Aziz-Resume_2025.pdf`). Key synchronization points:

- **Dates**: All internship and project dates match resume exactly
- **Roles**: Job titles and descriptions are verbatim from resume
- **Skills**: Technical skills list matches resume exactly
- **Projects**: Project details and technologies align with resume
- **Contact**: Email and contact information are current

## 🎨 Customization

### Colors
The portfolio uses a custom color scheme defined in `tailwind.config.js`:
- `neon-blue`: #00F3FF
- `neon-orange`: #FF7B00
- `dark-bg`: #0A0A0A
- `dark-surface`: #1A1A1A

### Fonts
- **Orbitron**: Used for headings and titles
- **Montserrat**: Used for body text and descriptions

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

The portfolio is automatically deployed on Vercel from the `main` branch. Any changes pushed to the main branch will trigger an automatic deployment.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome. Please feel free to open an issue or submit a pull request.

---

**Note**: This portfolio is actively maintained and synchronized with my resume. All information is current as of 2025. 