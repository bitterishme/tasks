import { Question, QuestionType } from "./interfaces/question";

/**
 * Create a new blank question with the given `id`, `name`, and `type. The `body` and
 * `expected` should be empty strings, the `options` should be an empty list, the `points`
 * should default to 1, and `published` should default to false.
 */
export function makeBlankQuestion(
    id: number,
    name: string,
    type: QuestionType,
): Question {
    return {
        id,
        name,
        type,
        body: "",
        expected: "",
        options: [],
        points: 1,
        published: false,
    };
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is correct. You should check that the `answer` is equal to
 * the `expected`, ignoring capitalization and trimming any whitespace.
 */
export function isCorrect(question: Question, answer: string): boolean {
    return (
        question.expected.trim().toLowerCase() === answer.trim().toLowerCase()
    );
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is valid (but not necessarily correct). For a `short_answer_question`,
 * any answer is valid. But for a `multiple_choice_question`, the `answer` must
 * be exactly one of the options.
 */
export function isValid(question: Question, answer: string): boolean {
    if (question.type === "short_answer_question") {
        return true;
    } else if (question.type === "multiple_choice_question") {
        return question.options.includes(answer);
    }
    return false;
}

/**
 * Consumes a question and produces a string representation combining the
 * `id` and first 10 characters of the `name`. The two strings should be
 * separated by ": ". So for example, the question with id 9 and the
 * name "My First Question" would become "9: My First Q".
 */
export function toShortForm(question: Question): string {
    const shortName =
        question.name.length > 10 ?
            question.name.substring(0, 10)
        :   question.name;
    return `${question.id}: ${shortName}`;
}

/**
 * Consumes a question and returns a formatted string representation as follows:
 *  - The first line should be a hash sign, a space, and then the `name`
 *  - The second line should be the `body`
 *  - If the question is a `multiple_choice_question`, then the following lines
 *      need to show each option on its line, preceded by a dash and space.
 */
export function toMarkdown(question: Question): string {
    let markdown = `# ${question.name}\n${question.body}`;

    if (
        question.type === "multiple_choice_question" &&
        question.options.length > 0
    ) {
        for (const option of question.options) {
            markdown += `\n- ${option}`;
        }
    }

    return markdown;
}

/**
 * Return a new version of the given question, except the name should now be
 * `newName`.
 */
export function renameQuestion(question: Question, newName: string): Question {
    return {
        ...question,
        name: newName,
    };
}

/**
 * Return a new version of the given question, except the `published` field
 * should be inverted. If the question was not published, now it should be
 * published; if it was published, now it should be not published.
 */
export function publishQuestion(question: Question): Question {
    return {
        ...question,
        published: !question.published,
    };
}

/**
 * Create a new question based on the old question, copying over its `body`, `type`,
 * `options`, `expected`, and `points` without changes. The `name` should be copied
 * over as "Copy of ORIGINAL NAME" (e.g., so "Question 1" would become "Copy of Question 1").
 * The `published` field should be reset to false.
 */
export function duplicateQuestion(id: number, oldQuestion: Question): Question {
    return {
        id,
        name: `Copy of ${oldQuestion.name}`,
        body: oldQuestion.body,
        type: oldQuestion.type,
        options: [...oldQuestion.options], // Create a new array to avoid shared reference
        expected: oldQuestion.expected,
        points: oldQuestion.points,
        published: false,
    };
}

/**
 * Return a new version of the given question, with the `newOption` added to
 * the list of existing `options`. Remember that the new Question MUST have
 * its own separate copy of the `options` list, rather than the same reference
 * to the original question's list!
 */
export function addOption(question: Question, newOption: string): Question {
    return {
        ...question,
        options: [...question.options, newOption], // Create a new array with the new option
    };
}

/**
 * Consumes an id, name, and two questions, and produces a new question.
 * The new question will use the `body`, `type`, `options`, and `expected` of the
 * `contentQuestion`. The second question will provide the `points`.
 * The `published` status should be set to false.
 */
export function mergeQuestion(
    id: number,
    name: string,
    contentQuestion: Question,
    { points }: { points: number },
): Question {
    return {
        id,
        name,
        body: contentQuestion.body,
        type: contentQuestion.type,
        options: [...contentQuestion.options], // Create a new array to avoid shared reference
        expected: contentQuestion.expected,
        points,
        published: false,
    };
}
