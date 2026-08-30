import { formatCourse } from './src/course.js';

// Example usage of the formatCourse function
const courseCode = 'CS101';
const courseName = 'Introduction to Computer Science';

const courseMessage = formatCourse(courseCode, courseName);
console.log(courseMessage);

export { formatCourse };
