const questions = [
    // --- カテゴリー: エクササイズテクニック (50問) ---
    {
        question: "スクワット中にクライアントの膝が内側に入る（ニーイン）場合、主にどの筋肉の弱さが考えられますか？",
        answers: [
            { text: "大腿四頭筋", correct: false },
            { text: "中殿筋", correct: true },
            { text: "ハムストリングス", correct: false },
            { text: "腓腹筋", correct: false }
        ],
        explanation: "中殿筋は股関節の外転と外旋に作用し、大腿骨を安定させる役割があります。この筋肉が弱いと、スクワットのような動作中に膝が内側に入りやすくなります。",
        difficulty: "初級",
        category: "エクササイズテクニック"
    },
    {
        question: "デッドリフトの正しいフォームにおいて、バーベルを引き上げる際に最も重要なことは何ですか？",
        answers: [
            { text: "腕の力で引き上げる", correct: false },
            { text: "背中を丸めて持ち上げる", correct: false },
            { text: "股関節と膝関節を同時に伸展させる", correct: true },
            { text: "つま先で地面を蹴る", correct: false }
        ],
        explanation: "デッドリフトは全身運動であり、特に股関節と膝関節の伸展（ヒップヒンジ）を同調させて行うことが、効率的で安全なリフティングの鍵となります。",
        difficulty: "中級",
        category: "エクササイズテクニック"
    },
    {
        question: "プライオメトリックトレーニングにおける『償却期間（amortization phase）』を短くすることの主な目的は何ですか？",
        answers: [
            { text: "怪我のリスクを減らすため", correct: false },
            { text: "より大きなパワーを発揮するため", correct: true },
            { text: "心肺機能を高めるため", correct: false },
            { text: "柔軟性を向上させるため", correct: false }
        ],
        explanation: "償却期間は、伸張性筋活動（エキセントリック）から短縮性筋活動（コンセントリック）への切り替え時間です。この時間が短いほど、筋腱複合体に蓄えられた弾性エネルギーを効率的に利用でき、より大きなパワーが発揮されます。",
        difficulty: "上級",
        category: "エクササイズテクニック"
    },
    {
        question: "ベンチプレスにおいて、スポッターの最も重要な役割は何ですか？",
        answers: [
            { text: "リフターのフォームを修正すること", correct: false },
            { text: "挙上重量を一緒に持ち上げること", correct: false },
            { text: "リフターが失敗した際にバーベルを安全にラックに戻すこと", correct: true },
            { text: "セット間の休憩時間を計測すること", correct: false }
        ],
        explanation: "スポッターの最優先事項はリフターの安全確保です。挙上が困難になった場合に、リフターがバーベルの下敷きになるのを防ぎ、安全に器具を元の位置に戻す手助けをすることが最も重要です。",
        difficulty: "初級",
        category: "エクササイズテクニック"
    },
    {
        question: "チンアップ（逆手懸垂）とプルアップ（順手懸垂）の主な違いは何ですか？",
        answers: [
            { text: "使用する筋肉に違いはない", correct: false },
            { text: "チンアップの方が上腕二頭筋の関与が大きくなる", correct: true },
            { text: "プルアップの方が可動域が広くなる", correct: false },
            { text: "チンアップは背中の筋肉を使わない", correct: false }
        ],
        explanation: "どちらも広背筋を主に鍛えるエクササイズですが、チンアップ（手のひらが自分を向くグリップ）では、プルアップ（手の甲が自分を向くグリップ）に比べて、肘の屈曲が大きくなるため上腕二頭筋の働きがより強調されます。",
        difficulty: "中級",
        category: "エクササイズテクニック"
    },
    {
        question: "ケトルベルスイングで最も重要な動作はどれですか？",
        answers: [
            { text: "腕の力でケトルベルを振り上げること", correct: false },
            { text: "股関節の爆発的な伸展（ヒップヒンジ）", correct: true },
            { text: "膝を深く曲げるスクワット動作", correct: false },
            { text: "背中を反らせて勢いをつけること", correct: false }
        ],
        explanation: "ケトルベルスイングは腕のトレーニングではなく、殿筋群とハムストリングスを使った爆発的な股関節伸展（ヒップドライブ）によってケトルベルを前方に振り出す、パワーと持久力を養うエクササイズです。",
        difficulty: "中級",
        category: "エクササイズテクニック"
    },
    {
        question: "トレーニング後の静的ストレッチ（スタティックストレッチ）の主な目的は何ですか？",
        answers: [
            { text: "筋力を向上させること", correct: false },
            { text: "心拍数を上げること", correct: false },
            { text: "筋肉の柔軟性を改善し、クールダウンを促進すること", correct: true },
            { text: "爆発的なパワーを高めること", correct: false }
        ],
        explanation: "静的ストレッチは、一定時間筋肉を伸展させた状態で保持することで、筋肉の緊張を和らげ、柔軟性を高める効果があります。トレーニング後のクールダウンの一環として行うのが一般的です。",
        difficulty: "初級",
        category: "エクササイズテクニック"
    },
    {
        question: "高重量のスクワットやデッドリフトを行う際に息を止めて腹圧を高める呼吸法を何と呼びますか？",
        answers: [
            { text: "過呼吸法", correct: false },
            { text: "ピラティス呼吸法", correct: false },
            { text: "バルサルバ法", correct: true },
            { text: "腹式呼吸法", correct: false }
        ],
        explanation: "バルサルバ法は、意図的に息を止めて腹腔内圧を高めることで体幹を安定させ、高重量を扱う際のリフティングパフォーマンス向上と脊柱の保護に役立ちます。ただし、血圧が急上昇するため、高血圧のクライアントには禁忌です。",
        difficulty: "上級",
        category: "エクササイズテクニック"
    },
    // ... (残り192問の問題データがここに入ります)
];
