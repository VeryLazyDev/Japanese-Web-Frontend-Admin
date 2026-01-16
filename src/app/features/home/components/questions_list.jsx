import QuestionCard from "./question-card";


const data = [
    {id: 1, title: "この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れました。この文章はダミーです"},
    {id: 2, title: "これはダミーテキストです。文章の内容には意味がありませんが、レイアウトやデザインを確認するために使用されます。フォントや行間、文字の配置を確認するのに適しています。"},
    {id: 3, title: "このテキストは仮の文章として作成されています。実際の情報を伝えるものではなく、視覚的なバランスや読みやすさを評価する目的で利用されます。"},
    {id: 4, title: "日本語のダミー文章は、ウェブサイトやアプリのUIデザインにおいてよく使われます。完成前のデザイン確認やプレゼンテーションに便利です"}
]

const QuestionList = () => {
    return (
        <>
        <div className="mt-5 grid grid-cols-3 grid-rows-3 gap-2 bg-transparent">
            {data.map((item) => (
                <QuestionCard 
                    key={item.id} 
                    id={item.id} 
                    title={item.title} 
                />
            ))}
        </div>
            
        </>
    );
};
export default QuestionList;
