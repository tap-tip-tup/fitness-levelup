
const part2AssessmentQuestions = [
    // 1-10
    {
        question: "トレーニング開始前にクライアントの健康状態をスクリーニングするために使用される、一般的な質問票は何ですか？",
        answers: [ { text: "SMARTゴール設定シート", correct: false }, { text: "PAR-Q+（身体活動準備質問票）", correct: true }, { text: "食事記録シート", correct: false }, { text: "トレーニング同意書", correct: false } ],
        explanation: "PAR-Q+は、運動を開始する前に、医学的なクリアランスが必要となりうる健康上の問題を特定するために設計された、国際的に広く利用されている自己申告式のスクリーニングツールです。",
        difficulty: "初級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの最大酸素摂取量（VO2max）を間接的に測定するためのテストとして、最も適切なものはどれですか？",
        answers: [ { text: "1RMテスト", correct: false }, { text: "垂直跳びテスト", correct: false }, { text: "クーパーテスト（12分間走）", correct: true }, { text: "Tテスト", correct: false } ],
        explanation: "クーパーテストは、12分間で走れる距離を測定し、その結果から最大酸素摂取量を推定する間接的な評価方法です。1RMは筋力、垂直跳びはパワー、Tテストは敏捷性を測定します。",
        difficulty: "中級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントとの初回カウンセリングで、SMARTの原則に基づいて目標設定を行う際の『S』は何を指しますか？",
        answers: [ { text: "科学的 (Scientific)", correct: false }, { text: "安全な (Safe)", correct: false }, { text: "具体的な (Specific)", correct: true }, { text: "単純な (Simple)", correct: false } ],
        explanation: "SMARTゴールは、Specific（具体的）、Measurable（測定可能）、Achievable（達成可能）、Relevant（関連性がある）、Time-bound（期限がある）の5つの要素から構成されます。Sは、目標が曖昧でなく、具体的であることを意味します。",
        difficulty: "中級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "体脂肪率の測定方法のうち、最も精度が高いとされている基準の一つは何ですか？",
        answers: [ { text: "生体電気インピーダンス法（BIA）", correct: false }, { text: "水中体重秤量法（ハイドロスタティック・ウェイイング）", correct: true }, { text: "皮下脂肪厚法（スキンフォールド法）", correct: false }, { text: "BMI（ボディマス指数）", correct: false } ],
        explanation: "水中体重秤量法は、身体の密度を測定することで体脂肪率を推定する方法で、研究室レベルで用いられるゴールドスタンダード（基準）の一つです。ただし、特殊な設備が必要で、クライアントへの負担も大きいのが欠点です。",
        difficulty: "上級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "安静時心拍数を測定するのに最も適したタイミングはいつですか？",
        answers: [ { text: "運動直後", correct: false }, { text: "食後すぐ", correct: false }, { text: "朝、目覚めてすぐにベッドの中で", correct: true }, { text: "ストレスを感じている時", correct: false } ],
        explanation: "安静時心拍数は、身体が完全にリラックスした状態での心拍数を示すため、朝目覚めてすぐにベッドの中で測定するのが最も正確です。運動や食事、ストレスは心拍数を上昇させるため、不正確な値となります。",
        difficulty: "初級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの姿勢を矢状面から評価する際、確認すべきアライメントの基準点はどれですか？",
        answers: [ { text: "左右の肩の高さが同じか", correct: false }, { text: "耳垂、肩峰、体幹の中央、大転子、膝関節前部、外果の前方を通る垂直線", correct: true }, { text: "骨盤が前後に傾いていないか", correct: false }, { text: "足部が内側や外側に向いていないか", correct: false } ],
        explanation: "矢状面（体を横から見た面）での理想的な姿勢アライメントは、重力線がこれらの基準点を通過することです。このラインからの逸脱（例：頭部前方突出、骨盤前傾）は、姿勢の崩れや潜在的な筋の不均衡を示唆します。",
        difficulty: "上級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの柔軟性を評価する「シット・アンド・リーチ」テストは、主にどの部位の柔軟性を測定していますか？",
        answers: [ { text: "肩関節", correct: false }, { text: "ハムストリングスと腰背部", correct: true }, { text: "股関節屈筋群", correct: false }, { text: "大腿四頭筋", correct: false } ],
        explanation: "シット・アンド・リーチは、長座位の姿勢から前屈するテストで、主に膝を伸ばしたまま股関節を屈曲させる能力を評価します。これはハムストリングスの柔軟性と、腰背部の伸展性に大きく影響されます。",
        difficulty: "初級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "1RM（最大挙上重量）テストを実施する際、最も重要な安全上の注意点は何ですか？",
        answers: [ { text: "クライアントにできるだけ早く挙上させること", correct: false }, { text: "十分なウォーミングアップと、熟練したスポッターの配置", correct: true }, { text: "テスト前に食事をさせないこと", correct: false }, { text: "クライアントのモチベーションを煽ること", correct: false } ],
        explanation: "1RMテストは高負荷を扱うため、怪我のリスクが伴います。十分なウォーミングアップで筋肉と神経系を準備し、万が一の際にバーベルを安全に補助できる熟練したスポッターを配置することが不可欠です。",
        difficulty: "中級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの体組成を評価する際、BMI（ボディマス指数）の主な限界は何ですか？",
        answers: [ { text: "身長を考慮しないこと", correct: false }, { text: "筋肉量と脂肪量の区別ができないこと", correct: true }, { text: "年齢を考慮しないこと", correct: false }, { text: "性別を考慮しないこと", correct: false } ],
        explanation: "BMIは体重と身長から算出されるため、筋肉質なアスリートでもBMIが高く「肥満」と判定されることがあります。これは、BMIが体脂肪率を直接反映するものではなく、筋肉量と脂肪量の区別ができないためです。",
        difficulty: "初級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの動機付けを高めるためのコミュニケーションスキルとして、「傾聴」が重要な理由は何ですか？",
        answers: [ { text: "トレーナーがたくさん話すため", correct: false }, { text: "クライアントの言葉の背後にある感情やニーズを深く理解し、信頼関係を築くため", correct: true }, { text: "トレーニング時間を短縮するため", correct: false }, { text: "すぐにプログラムを売り込むため", correct: false } ],
        explanation: "傾聴とは、ただ話を聞くのではなく、相手の言葉、表情、声のトーンに注意を払い、共感的に理解しようと努めることです。これにより、クライアントは「理解してもらえている」と感じ、心を開いてくれるため、強固な信頼関係（ラポール）の構築と、内発的動機付けの向上に繋がります。",
        difficulty: "中級", category: "Part 2: 初期面談と評価"
    },
    // 11-20
    {
        question: "体力評価テストを実施する際の、正しい順序として最も推奨されるものはどれですか？",
        answers: [ { text: "筋力テスト → 有酸素能力テスト → 無酸素能力テスト", correct: false }, { text: "疲労度の低いテストから高いテストへ（例：安静時測定 → 敏捷性 → 筋力 → 有酸素）", correct: true }, { text: "有酸素能力テスト → 筋力テスト → 敏捷性テスト", correct: false }, { text: "好きな順番で行う", correct: false } ],
        explanation: "テストの順序は、前のテストの疲労が次のテストの結果に影響しないように配慮する必要があります。一般的に、①安静時測定（心拍数、血圧など）、②敏捷性、③最大筋力・パワー、④筋持久力、⑤有酸素能力、という順序が、疲労の影響を最小限に抑えるため推奨されます。",
        difficulty: "上級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの「自己効力感」を高めるためのアプローチとして、最も効果的なものはどれですか？",
        answers: [ { text: "常に非常に困難な課題を与える", correct: false }, { text: "達成可能な小さな成功体験を積み重ねさせ、ポジティブなフィードバックを与える", correct: true }, { text: "他のクライアントと比較して、競争心を煽る", correct: false }, { text: "クライアントの失敗を厳しく指摘する", correct: false } ],
        explanation: "自己効力感とは、「自分ならできる」という自信や信念のことです。これを育むには、まず本人が「できた！」と感じられる、現実的で達成可能な目標を設定することが最も重要です。小さな成功体験の積み重ねが、より大きな挑戦への意欲と自信に繋がります。",
        difficulty: "中級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "心拍数を用いて有酸素運動の強度を管理する際、最大心拍数の簡易的な推定式として広く使われているものはどれですか？",
        answers: [ { text: "220 - 年齢", correct: true }, { text: "200 + 年齢", correct: false }, { text: "180 - 体重", correct: false }, { text: "240 - 身長", correct: false } ],
        explanation: "「220 - 年齢」は、最大心拍数を推定するための最もシンプルで広く知られた公式です。ただし、個人差が大きいため、あくまで大まかな目安として利用し、可能であればカルボーネン法や自覚的運動強度（RPE）と併用することが望ましいです。",
        difficulty: "初級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "行動変容ステージモデルにおいて、6ヶ月以内に運動を開始しようと真剣に考えているが、まだ実行には移していない段階はどれですか？",
        answers: [ { text: "無関心期", correct: false }, { text: "関心期", correct: true }, { text: "準備期", correct: false }, { text: "実行期", correct: false } ],
        explanation: "行動変容ステージモデルでは、人の行動の変化を5つのステージで捉えます。関心期（Contemplation）は、問題意識は持ち始めているものの、まだ行動を起こすことのメリットとデメリットを天秤にかけている状態で、具体的な計画には至っていません。",
        difficulty: "上級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントとのラポール（信頼関係）を築く上で、最も重要な要素は何ですか？",
        answers: [ { text: "トレーナーの筋肉量", correct: false }, { text: "共感的な態度、傾聴、そして誠実さ", correct: true }, { text: "トレーニング料金の安さ", correct: false }, { text: "厳しい指導", correct: false } ],
        explanation: "ラポールは、クライアントがトレーナーを信頼し、安心して心を開ける関係性のことです。これは、トレーナーがクライアントの立場や感情を理解しようと努め（共感）、真摯に話を聞き（傾聴）、一貫性のある誠実な態度で接することによって築かれます。",
        difficulty: "中級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "体力評価の結果をクライアントにフィードバックする際、最も適切な方法はどれですか？",
        answers: [ { text: "専門用語を多用して説明する", correct: false }, { text: "他のクライアントの結果と比較して評価する", correct: false }, { text: "肯定的で建設的な言葉を選び、評価結果が今後のプログラムにどう活かされるかを具体的に説明する", correct: true }, { text: "結果の数値だけを伝えて終わる", correct: false } ],
        explanation: "フィードバックの目的は、クライアントのモチベーションを高め、プログラムへの理解を深めてもらうことです。結果の善し悪しだけでなく、その数値が何を意味するのか、そしてそれを基に今後どのように改善していくのかを、前向きで分かりやすい言葉で伝えることが重要です。",
        difficulty: "初級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "高齢のクライアントの転倒リスクを評価するための、簡易的で効果的なテストは何ですか？",
        answers: [ { text: "垂直跳びテスト", correct: false }, { text: "タイムド・アップ・アンド・ゴー（TUG）テスト", correct: true }, { text: "40ヤード走", correct: false }, { text: "1RMレッグプレステスト", correct: false } ],
        explanation: "TUGテストは、椅子から立ち上がり、3m先の目印まで歩いて戻り、再び椅子に座るまでの一連の動作にかかる時間を測定します。このテストは、高齢者のバランス、歩行能力、機能的な可動性を総合的に評価し、転倒リスクを予測するのに広く用いられています。",
        difficulty: "中級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントが「腰が痛い」と訴えてきた場合、トレーナーとして最初に行うべきことは何ですか？",
        answers: [ { text: "すぐにマッサージをする", correct: false }, { text: "痛みの性質、場所、発生状況などを詳しく質問し（問診）、医療機関の受診が必要か判断する（スクリーニング）", correct: true }, { text: "より強い腹筋トレーニングを課す", correct: false }, { text: "問題ないと判断し、トレーニングを続けさせる", correct: false } ],
        explanation: "トレーナーは診断を下せませんが、痛みの詳細を聞き、それが単純な筋肉痛なのか、あるいは医療的介入が必要な危険な兆候（レッドフラッグ）を含んでいるのかを判断するためのスクリーニングを行う責任があります。疑わしい場合は、直ちに運動を中止させ、医師の診察を勧めなければなりません。",
        difficulty: "中級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントのトレーニング記録を詳細につけることの最も重要な理由は何ですか？",
        answers: [ { text: "請求書を作成するため", correct: false }, { text: "プログラムの効果を客観的に評価し、進捗に基づいて適切な修正を行うため", correct: true }, { text: "クライアントとの会話のネタにするため", correct: false }, { text: "トレーナー自身の自己満足のため", correct: false } ],
        explanation: "トレーニング記録は、プログラムがクライアントの目標達成に貢献しているかを判断するための客観的な証拠となります。挙上重量、回数、セット数、RPEなどのデータを追跡することで、停滞の兆候を早期に発見し、科学的根拠に基づいたプログラム修正が可能になります。",
        difficulty: "初級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの目標が「健康維持・増進」である場合、最も重要なトレーニング要素は何ですか？",
        answers: [ { text: "最大筋力の向上", correct: false }, { text: "レジスタンストレーニング、有酸素運動、柔軟性運動をバランス良く組み合わせること", correct: true }, { text: "高強度のインターバルトレーニングのみを行うこと", correct: false }, { text: "特定のスポーツのパフォーマンス向上", correct: false } ],
        explanation: "特定の競技力向上ではなく、全体的な健康を目指す場合、筋力、心肺機能、柔軟性といった様々な体力要素をバランス良く向上させることが重要です。これらの要素を組み合わせた総合的なプログラムが推奨されます。",
        difficulty: "初級", category: "Part 2: 初期面談と評価"
    },
    // 21-30
    {
        question: "クライアントの体組成を評価する際、皮下脂肪厚法で測定する部位として一般的に用いられないのはどこですか？",
        answers: [ { text: "上腕三頭筋部", correct: false }, { text: "肩甲骨下部", correct: false }, { text: "腹部", correct: false }, { text: "頭頂部", correct: true } ],
        explanation: "皮下脂肪厚法は、キャリパーという器具を使って特定の部位の皮下脂肪の厚みをつまんで測定します。測定部位は標準化されており、一般的に上腕三頭筋、肩甲骨下、腹部、腸骨上、大腿前面などが用いられます。頭頂部は測定部位ではありません。",
        difficulty: "初級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの姿勢を評価する際、前方から見て左右の肩の高さが異なる場合、何が考えられますか？",
        answers: [ { text: "脊柱側弯症、または肩甲骨周囲筋のアンバランス", correct: true }, { text: "足首の柔軟性不足", correct: false }, { text: "ハムストリングスの柔軟性不足", correct: false }, { text: "体脂肪率が高い", correct: false } ],
        explanation: "左右の肩の高さの違いは、脊柱の側弯や、肩甲骨を安定させる筋肉（僧帽筋、菱形筋など）の筋力や柔軟性のアンバランスを示唆する可能性があります。",
        difficulty: "中級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの目標設定において、SMARTの原則の「A」は何を指しますか？",
        answers: [ { text: "行動 (Action)", correct: false }, { text: "達成可能 (Achievable)", correct: true }, { text: "分析 (Analyze)", correct: false }, { text: "承認 (Approve)", correct: false } ],
        explanation: "SMARTゴールのAはAchievable（達成可能）を意味します。目標は、クライアントの能力や状況から見て、現実的に達成できるものであるべきです。",
        difficulty: "初級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの心肺持久力を評価する際、サブマキシマルテスト（最大下テスト）の利点は何ですか？",
        answers: [ { text: "最大運動能力を直接測定できる", correct: false }, { text: "安全性が高く、特別な医療機器が不要で、多くのクライアントに適用しやすい", correct: true }, { text: "疲労度が非常に高い", correct: false }, { text: "アスリートのピークパフォーマンスを正確に予測できる", correct: false } ],
        explanation: "サブマキシマルテストは、クライアントを最大運動能力まで追い込まずに、心拍数などの生理的反応から最大酸素摂取量を推定するテストです。安全性が高く、特別な医療機器が不要なため、一般的なフィットネス現場で広く用いられます。",
        difficulty: "中級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの姿勢評価で、骨盤が前方に傾いている状態を何と呼びますか？",
        answers: [ { text: "骨盤後傾", correct: false }, { text: "骨盤前傾", correct: true }, { text: "骨盤回旋", correct: false }, { text: "骨盤側方傾斜", correct: false } ],
        explanation: "骨盤前傾（Anterior Pelvic Tilt）は、骨盤が前方に傾き、腰椎の過度な反り（腰椎過前弯）を伴うことが多い姿勢です。股関節屈筋群の短縮や、腹筋群・殿筋群の弱さが原因となることがあります。",
        difficulty: "中級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの健康状態に関する情報を収集する際、最も信頼性の高い情報源は何ですか？",
        answers: [ { text: "インターネットの掲示板", correct: false }, { text: "クライアントの自己申告（ただし、必要に応じて医師の診断書などと照合）", correct: true }, { text: "友人からの情報", correct: false }, { text: "トレーナーの推測", correct: false } ],
        explanation: "クライアントの健康状態に関する最も直接的で重要な情報源は、クライアント自身の自己申告です。ただし、既往歴や現在の健康状態によっては、医師の診断書や医療機関からの情報と照合し、安全性を確保することが不可欠です。",
        difficulty: "初級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの筋力評価で、1RMテストが適切でないと判断されるクライアントはどれですか？",
        answers: [ { text: "トレーニング経験が豊富なアスリート", correct: false }, { text: "高血圧や心臓疾患の既往があるクライアント", correct: true }, { text: "筋力向上を目標としているクライアント", correct: false }, { text: "若くて健康なクライアント", correct: false } ],
        explanation: "1RMテストは高負荷を扱うため、血圧の急上昇や心臓への負担が大きいです。高血圧や心臓疾患の既往があるクライアントには、より安全な最大下テスト（例：複数回反復テストから1RMを推定）や、RPE（自覚的運動強度）を用いた評価方法を選択すべきです。",
        difficulty: "上級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの目標設定において、SMARTの原則の「R」は何を指しますか？",
        answers: [ { text: "休息 (Rest)", correct: false }, { text: "関連性がある (Relevant)", correct: true }, { text: "回復 (Recovery)", correct: false }, { text: "記録 (Record)", correct: false } ],
        explanation: "SMARTゴールのRはRelevant（関連性がある）を意味します。目標は、クライアントの価値観や長期的な目標と一致し、意味のあるものであるべきです。",
        difficulty: "中級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの柔軟性評価で、ハムストリングスの柔軟性を評価するのに適したテストはどれですか？",
        answers: [ { text: "トーマス・テスト", correct: false }, { text: "シット・アンド・リーチテスト", correct: true }, { text: "アプレースクラッチテスト", correct: false }, { text: "オーバーヘッドスクワットテスト", correct: false } ],
        explanation: "シット・アンド・リーチテストは、長座位で膝を伸ばしたまま前屈し、指先がどのくらい届くかを測定するテストで、ハムストリングスと腰背部の柔軟性を評価します。",
        difficulty: "初級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの運動能力を評価する際、敏捷性（アジリティ）を測定するのに適したテストはどれですか？",
        answers: [ { text: "垂直跳びテスト", correct: false }, { text: "Tテスト", correct: true }, { text: "クーパーテスト", correct: false }, { text: "1RMベンチプレステスト", correct: false } ],
        explanation: "Tテストは、方向転換、加速、減速を伴う動きを評価するテストで、敏捷性を測定するのに広く用いられます。",
        difficulty: "中級", category: "Part 2: 初期面談と評価"
    },
    // 21-30
    {
        question: "クライアントの姿勢評価で、肩が前方に丸まっている状態を何と呼びますか？",
        answers: [ { text: "スウェイバック", correct: false }, { text: "円背（猫背）", correct: true }, { text: "フラットバック", correct: false }, { text: "ロードシス", correct: false } ],
        explanation: "円背（Kyphosis）は、胸椎の過度な後弯（丸まり）と、それに伴う肩の前方突出（巻き肩）を特徴とする姿勢です。長時間のデスクワークやスマートフォンの使用が原因となることが多いです。",
        difficulty: "中級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの目標設定において、SMARTの原則の「T」は何を指しますか？",
        answers: [ { text: "トレーニング (Training)", correct: false }, { text: "期限がある (Time-bound)", correct: true }, { text: "テスト (Test)", correct: false }, { text: "チーム (Team)", correct: false } ],
        explanation: "SMARTゴールのTはTime-bound（期限がある）を意味します。目標には、いつまでに達成するかという明確な期限を設定することで、計画性が高まり、モチベーションを維持しやすくなります。",
        difficulty: "初級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの心肺持久力を評価する際、最大運動負荷テストの主な利点は何ですか？",
        answers: [ { text: "安全性が非常に高い", correct: false }, { text: "最大酸素摂取量（VO2max）を直接的かつ最も正確に測定できる", correct: true }, { text: "特別な医療機器が不要", correct: false }, { text: "クライアントの疲労度が低い", correct: false } ],
        explanation: "最大運動負荷テストは、クライアントを最大運動能力まで追い込み、呼気ガス分析などを用いてVO2maxを直接測定する方法です。最も正確な評価が可能ですが、医療的な監視が必要であり、リスクも伴います。",
        difficulty: "上級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの筋持久力を評価するのに適したテストはどれですか？",
        answers: [ { text: "1RMベンチプレステスト", correct: false }, { text: "腕立て伏せ最大反復回数テスト", correct: true }, { text: "垂直跳びテスト", correct: false }, { text: "Tテスト", correct: false } ],
        explanation: "筋持久力は、特定の負荷でどれだけ多くの回数を反復できるか、またはどれだけ長く持続できるかで評価されます。腕立て伏せや腹筋運動の最大反復回数テストが代表的です。",
        difficulty: "初級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの健康状態に関する質問票（PAR-Q+など）で、運動を始める前に医師の診察を推奨する「レッドフラッグ」の兆候として、適切でないものはどれですか？",
        answers: [ { text: "安静時の胸の痛み", correct: false }, { text: "原因不明のめまいや失神", correct: false }, { text: "運動中に起こる関節の軽い違和感", correct: true }, { text: "心臓病の既往歴", correct: false } ],
        explanation: "レッドフラッグは、運動によって健康状態が悪化する可能性のある、深刻な医学的兆候や症状を指します。胸の痛みやめまい、心臓病の既往歴などは、医師の診察が必須です。関節の軽い違和感は、運動指導の調整で対応できる場合が多いですが、痛みが続く場合は専門医の受診を勧めるべきです。",
        difficulty: "上級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの目標設定において、SMARTの原則の「M」は何を指しますか？",
        answers: [ { text: "動機付け (Motivation)", correct: false }, { text: "測定可能 (Measurable)", correct: true }, { text: "最小限 (Minimal)", correct: false }, { text: "最大 (Maximal)", correct: false } ],
        explanation: "SMARTゴールのMはMeasurable（測定可能）を意味します。目標の進捗が客観的に追跡できるよう、具体的な数値で設定することが重要です。「体重を減らす」ではなく「体重を3kg減らす」のように設定します。",
        difficulty: "初級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの姿勢評価で、足部が過度に内側に倒れ込んでいる状態を何と呼びますか？",
        answers: [ { text: "回外足", correct: false }, { text: "回内足（扁平足）", correct: true }, { text: "ハイアーチ", correct: false }, { text: "外反母趾", correct: false } ],
        explanation: "回内足（Pronated Foot）は、足のアーチが低下し、足部が内側に倒れ込んでいる状態です。一般的に扁平足とも呼ばれ、膝や股関節、腰への負担に繋がることがあります。",
        difficulty: "中級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの身体能力を評価する際、パワー（瞬発力）を測定するのに適したテストはどれですか？",
        answers: [ { text: "垂直跳びテスト", correct: true }, { text: "長座体前屈", correct: false }, { text: "握力テスト", correct: false }, { text: "シャトルラン", correct: false } ],
        explanation: "垂直跳びテストは、下半身の爆発的なパワーを測定する代表的なテストです。",
        difficulty: "中級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの初期面談で、オープンエンドな質問（はい/いいえで答えられない質問）を用いる主な目的は何ですか？",
        answers: [ { text: "クライアントの返答を制限するため", correct: false }, { text: "クライアントからより多くの情報や感情を引き出し、深い理解と信頼関係を築くため", correct: true }, { text: "面談時間を短縮するため", correct: false }, { text: "トレーナーが話す時間を増やすため", correct: false } ],
        explanation: "オープンエンドな質問（例：「どのような目標をお持ちですか？」「運動についてどう感じていますか？」）は、クライアントが自由に考え、詳しく話すことを促します。これにより、クライアントの真のニーズや動機、懸念事項を深く理解し、よりパーソナルな関係を築くことができます。",
        difficulty: "初級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの健康状態を評価する際、喫煙習慣が運動プログラムに与える影響として最も適切なものはどれですか？",
        answers: [ { text: "心肺機能が向上する", correct: false }, { text: "心血管疾患のリスクを高め、運動能力を低下させる可能性がある", correct: true }, { text: "筋肉量が増加する", correct: false }, { text: "回復が早まる", correct: false } ],
        explanation: "喫煙は、心血管疾患、呼吸器疾患、がんなど、多くの健康リスクを高めます。運動能力の面では、酸素運搬能力の低下や、心拍数・血圧の上昇などにより、運動パフォーマンスを低下させる可能性があります。",
        difficulty: "中級", category: "Part 2: 初期面談と評価"
    },
    // 31-40
    {
        question: "クライアントの姿勢評価で、頭部が体幹より前方に位置している状態を何と呼びますか？",
        answers: [ { text: "スウェイバック", correct: false }, { text: "頭部前方突出（Forward Head Posture）", correct: true }, { text: "フラットバック", correct: false }, { text: "ロードシス", correct: false } ],
        explanation: "頭部前方突出は、首の筋肉のアンバランスや長時間のデスクワークなどが原因で、頭が体幹よりも前に突き出た姿勢です。首や肩の凝り、頭痛の原因となることがあります。",
        difficulty: "中級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの目標設定において、SMARTの原則の「A」は何を指しますか？",
        answers: [ { text: "行動 (Action)", correct: false }, { text: "達成可能 (Achievable)", correct: true }, { text: "分析 (Analyze)", correct: false }, { text: "承認 (Approve)", correct: false } ],
        explanation: "SMARTゴールのAはAchievable（達成可能）を意味します。目標は、クライアントの能力や状況から見て、現実的に達成できるものであるべきです。",
        difficulty: "初級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの健康状態に関する質問票（PAR-Q+など）で、運動を始める前に医師の診察を推奨する「レッドフラッグ」の兆候として、適切でないものはどれですか？",
        answers: [ { text: "安静時の胸の痛み", correct: false }, { text: "原因不明のめまいや失神", correct: false }, { text: "運動中に起こる関節の軽い違和感", correct: true }, { text: "心臓病の既往歴", correct: false } ],
        explanation: "レッドフラッグは、運動によって健康状態が悪化する可能性のある、深刻な医学的兆候や症状を指します。胸の痛みやめまい、心臓病の既往歴などは、医師の診察が必須です。関節の軽い違和感は、運動指導の調整で対応できる場合が多いですが、痛みが続く場合は専門医の受診を勧めるべきです。",
        difficulty: "上級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの体組成を評価する際、生体電気インピーダンス法（BIA）の主な限界は何ですか？",
        answers: [ { text: "測定に時間がかかること", correct: false }, { text: "体内の水分量に影響されやすいこと", correct: true }, { text: "筋肉量と脂肪量の区別ができないこと", correct: false }, { text: "高価な機器が必要なこと", correct: false } ],
        explanation: "BIAは、体内に微弱な電流を流し、その抵抗値から体脂肪率を推定する方法です。体内の水分量（脱水状態、むくみなど）によって抵抗値が変化するため、測定時の水分状態に結果が大きく左右されるという限界があります。",
        difficulty: "中級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの運動能力を評価する際、バランス能力を測定するのに適したテストはどれですか？",
        answers: [ { text: "片足立ちテスト（シングルレッグスタンス）", correct: true }, { text: "反復横跳び", correct: false }, { text: "立ち幅跳び", correct: false }, { text: "握力テスト", correct: false } ],
        explanation: "片足立ちテストは、静的なバランス能力を評価する最も基本的なテストです。目を閉じて行ったり、不安定な台の上で行ったりすることで、難易度を上げることができます。",
        difficulty: "初級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの健康状態に関する質問票（PAR-Q+など）で、運動を始める前に医師の診察を推奨する「レッドフラッグ」の兆候として、適切でないものはどれですか？",
        answers: [ { text: "安静時の胸の痛み", correct: false }, { text: "原因不明のめまいや失神", correct: false }, { text: "運動中に起こる関節の軽い違和感", correct: true }, { text: "心臓病の既往歴", correct: false } ],
        explanation: "レッドフラッグは、運動によって健康状態が悪化する可能性のある、深刻な医学的兆候や症状を指します。胸の痛みやめまい、心臓病の既往歴などは、医師の診察が必須です。関節の軽い違和感は、運動指導の調整で対応できる場合が多いですが、痛みが続く場合は専門医の受診を勧めるべきです。",
        difficulty: "上級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの目標設定において、SMARTの原則の「R」は何を指しますか？",
        answers: [ { text: "休息 (Rest)", correct: false }, { text: "関連性がある (Relevant)", correct: true }, { text: "回復 (Recovery)", correct: false }, { text: "記録 (Record)", correct: false } ],
        explanation: "SMARTゴールのRはRelevant（関連性がある）を意味します。目標は、クライアントの価値観や長期的な目標と一致し、意味のあるものであるべきです。",
        difficulty: "中級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの柔軟性評価で、ハムストリングスの柔軟性を評価するのに適したテストはどれですか？",
        answers: [ { text: "トーマス・テスト", correct: false }, { text: "シット・アンド・リーチテスト", correct: true }, { text: "アプレースクラッチテスト", correct: false }, { text: "オーバーヘッドスクワットテスト", correct: false } ],
        explanation: "シット・アンド・リーチテストは、長座位で膝を伸ばしたまま前屈し、指先がどのくらい届くかを測定するテストで、ハムストリングスと腰背部の柔軟性を評価します。",
        difficulty: "初級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの運動能力を評価する際、敏捷性（アジリティ）を測定するのに適したテストはどれですか？",
        answers: [ { text: "垂直跳びテスト", correct: false }, { text: "Tテスト", correct: true }, { text: "クーパーテスト", correct: false }, { text: "1RMベンチプレステスト", correct: false } ],
        explanation: "Tテストは、方向転換、加速、減速を伴う動きを評価するテストで、敏捷性を測定するのに広く用いられます。",
        difficulty: "中級", category: "Part 2: 初期面談と評価"
    },
    {
        question: "クライアントの健康状態を評価する際、喫煙習慣が運動プログラムに与える影響として最も適切なものはどれですか？",
        answers: [ { text: "心肺機能が向上する", correct: false }, { text: "心血管疾患のリスクを高め、運動能力を低下させる可能性がある", correct: true }, { text: "筋肉量が増加する", correct: false }, { text: "回復が早まる", correct: false } ],
        explanation: "喫煙は、心血管疾患、呼吸器疾患、がんなど、多くの健康リスクを高めます。運動能力の面では、酸素運搬能力の低下や、心拍数・血圧の上昇などにより、運動パフォーマンスを低下させる可能性があります。",
        difficulty: "中級", category: "Part 2: 初期面談と評価"
    }
];
