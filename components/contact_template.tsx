import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";

import { ContactFormData } from '@/components/contact';

export default function ContactEmail(data: ContactFormData) {

    // console.log("building a nice email: ", data);

    const { company, position, department, email, name, phone, country, message } = data;

  return (
    <Html>
      <Section style={styles.main}>
        <Container style={styles.container}>
          <Text style={styles.heading}>New Contact Request</Text>
          <Text style={styles.info}><span style={styles.label}>Name:</span> {name}</Text>
          <Text style={styles.info}><span style={styles.label}>Email:</span> {email}</Text>
          <Text style={styles.info}><span style={styles.label}>Phone:</span> {phone}</Text>
          <Text style={styles.info}><span style={styles.label}>Company:</span> {company}</Text>
          <Text style={styles.info}><span style={styles.label}>Position:</span> {position}</Text>
          <Text style={styles.info}><span style={styles.label}>Department:</span> {department}</Text>
          <Text style={styles.info}><span style={styles.label}>Country:</span> {country}</Text>
          <Text style={styles.info}><span style={styles.label}>Message:</span> {message}</Text>
        </Container>
      </Section>
    </Html>
  );
}

const styles = {
  main: {
    backgroundColor: '#f3f4f6',
    padding: '20px',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '24px',
    color: '#333333',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '16px',
    color: '#333333',
    lineHeight: '1.5',
    marginBottom: '10px',
  },
  label: {
    fontWeight: 'bold',
  },
  info: {
    marginBottom: '10px',
  },
};