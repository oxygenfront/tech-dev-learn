import Title from '@/components/title/Title';
import { LessonsWrapper } from '@/types/LessonWrapper';
import { FC } from 'react';
import styles from './LessonsList.module.sass';
import SubLessonsWrapper from './lessons/SubLessonsWrapper';

interface LessonsComp {
  lessonsList: LessonsWrapper[];
}

const LessonsList: FC<LessonsComp> = ({ lessonsList }) => {
  return (
    <div>
      <Title title="Уроки" titleLayer={1} fontSize={40} marginBottom={28} />
      <div className={styles.wrapper_lessons}>
        {lessonsList?.map((item: LessonsWrapper, index) => (
          <SubLessonsWrapper
            lesson={item}
            key={index}
            countingLesson={index + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default LessonsList;
