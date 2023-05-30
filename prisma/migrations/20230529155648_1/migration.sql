-- CreateTable
CREATE TABLE "course_instructors" (
    "course_id" INTEGER NOT NULL,
    "instructor_id" INTEGER NOT NULL,

    CONSTRAINT "course_instructors_pkey" PRIMARY KEY ("course_id","instructor_id")
);

-- CreateTable
CREATE TABLE "course_schedule" (
    "id" SERIAL NOT NULL,
    "course_id" INTEGER,
    "instructor_id" INTEGER,
    "room" VARCHAR(20),
    "day_of_week" INTEGER,
    "start_time" TIME(6),
    "end_time" TIME(6),

    CONSTRAINT "course_schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "courses" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(20),
    "name" VARCHAR(50),
    "description" TEXT,
    "credit" INTEGER,
    "hours" INTEGER,
    "department_id" INTEGER,
    "sub_course_id" INTEGER,

    CONSTRAINT "courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "departments" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50),
    "faculty_id" INTEGER,

    CONSTRAINT "departments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255),
    "description" TEXT,
    "event_date" DATE,
    "location" VARCHAR(255),

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "faculties" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50),

    CONSTRAINT "faculties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grades" (
    "student_id" INTEGER,
    "course_id" INTEGER,
    "midterm_grade" INTEGER,
    "final_grade" INTEGER,
    "average_grade" INTEGER,
    "id" SERIAL NOT NULL,
    "quiz" INTEGER,
    "homework" INTEGER,

    CONSTRAINT "grades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "instructors" (
    "id" SERIAL NOT NULL,
    "first_name" VARCHAR(50),
    "last_name" VARCHAR(50),
    "birth_date" DATE,
    "gender" CHAR(1),
    "email" VARCHAR(100),
    "phone" VARCHAR(20),
    "department_id" INTEGER,

    CONSTRAINT "instructors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "student_courses" (
    "student_id" INTEGER,
    "course_id" INTEGER,
    "semester" INTEGER,
    "year" INTEGER,
    "id" BIGSERIAL NOT NULL,

    CONSTRAINT "student_courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "students" (
    "id" SERIAL NOT NULL,
    "first_name" VARCHAR(50),
    "last_name" VARCHAR(50),
    "gender" CHAR(1),
    "birth_date" DATE,
    "address" VARCHAR(255),
    "email" VARCHAR(100),
    "phone" VARCHAR(20),
    "enrollment_date" DATE,
    "department_id" INTEGER,
    "event_id" INTEGER,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sub_course_instructors" (
    "sub_course_id" INTEGER NOT NULL,
    "instructor_id" INTEGER NOT NULL,

    CONSTRAINT "sub_course_instructors_pkey" PRIMARY KEY ("sub_course_id","instructor_id")
);

-- CreateTable
CREATE TABLE "sub_courses" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(20),
    "name" VARCHAR(20),
    "description" TEXT,
    "credit" INTEGER,
    "hours" INTEGER,

    CONSTRAINT "sub_courses_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "course_instructors" ADD CONSTRAINT "course_instructors_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "course_instructors" ADD CONSTRAINT "course_instructors_instructor_id_fkey" FOREIGN KEY ("instructor_id") REFERENCES "instructors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "course_schedule" ADD CONSTRAINT "course_schedule_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "course_schedule" ADD CONSTRAINT "course_schedule_instructor_id_fkey" FOREIGN KEY ("instructor_id") REFERENCES "instructors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "departments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_sub_course_id_fkey" FOREIGN KEY ("sub_course_id") REFERENCES "sub_courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "departments" ADD CONSTRAINT "departments_faculty_id_fkey" FOREIGN KEY ("faculty_id") REFERENCES "faculties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "grades" ADD CONSTRAINT "grades_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "grades" ADD CONSTRAINT "grades_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "instructors" ADD CONSTRAINT "instructors_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "departments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "student_courses" ADD CONSTRAINT "student_courses_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "student_courses" ADD CONSTRAINT "student_courses_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "departments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sub_course_instructors" ADD CONSTRAINT "sub_course_instructors_instructor_id_fkey" FOREIGN KEY ("instructor_id") REFERENCES "instructors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sub_course_instructors" ADD CONSTRAINT "sub_course_instructors_sub_course_id_fkey" FOREIGN KEY ("sub_course_id") REFERENCES "sub_courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
