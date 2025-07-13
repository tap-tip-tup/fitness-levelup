
const part1ScienceQuestions = [
    // 1-10
    {
        question: "ATP-PCr（アデノシン三リン酸-クレアチンリン酸）システムが主なエネルギー供給源となる運動の持続時間は、およそどのくらいですか？",
        answers: [ { text: "0〜10秒", correct: true }, { text: "30秒〜2分", correct: false }, { text: "5分〜30分", correct: false }, { text: "30分以上", correct: false } ],
        explanation: "ATP-PCrシステムは、筋肉に貯蔵されているクレアチンリン酸を分解してATPを再合成する、最も速くエネルギーを供給するシステムです。短時間（最大10秒程度）の非常に高強度な運動（例：100m走、ウェイトリフティングの1RM）で主に利用されます。",
        difficulty: "初級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "有酸素性エネルギー供給システムが主なエネルギー供給源となる運動の持続時間は、およそどのくらいですか？",
        answers: [ { text: "10秒以内", correct: false }, { text: "30秒〜2分", correct: false }, { text: "2分以上", correct: true }, { text: "運動の種類に関わらず常に", correct: false } ],
        explanation: "有酸素性エネルギー供給システムは、酸素を用いて糖質や脂質を分解し、ATPを生成します。エネルギー供給速度は遅いですが、供給能力は非常に高く、長時間の運動（例：マラソン、ジョギング）で主に利用されます。",
        difficulty: "初級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "筋肉の収縮様式で、筋肉が長さを変えずに力を発揮するものを何と呼びますか？",
        answers: [ { text: "等張性収縮（アイソトニック）", correct: false }, { text: "等尺性収縮（アイソメトリック）", correct: true }, { text: "等速性収縮（アイソキネティック）", correct: false }, { text: "伸張性収縮（エキセントリック）", correct: false } ],
        explanation: "等尺性収縮（Isometric Contraction）は、筋肉が収縮してもその長さが変わらない収縮様式です。壁を押す動作や、プランクなどの体幹トレーニングで多く見られます。",
        difficulty: "初級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "筋肉の収縮様式で、筋肉が短くなりながら力を発揮するものを何と呼びますか？",
        answers: [ { text: "伸張性収縮（エキセントリック）", correct: false }, { text: "短縮性収縮（コンセントリック）", correct: true }, { text: "等尺性収縮（アイソメトリック）", correct: false }, { text: "等速性収縮（アイソキネティック）", correct: false } ],
        explanation: "短縮性収縮（Concentric Contraction）は、筋肉が短くなりながら力を発揮する収縮様式です。ダンベルを持ち上げる動作（アームカールの上げる局面）などがこれに該当します。",
        difficulty: "初級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "筋肉の収縮様式で、筋肉が伸びながら力を発揮するものを何と呼びますか？",
        answers: [ { text: "短縮性収縮（コンセントリック）", correct: false }, { text: "伸張性収縮（エキセントリック）", correct: true }, { text: "等尺性収縮（アイソメトリック）", correct: false }, { text: "等速性収縮（アイソキネティック）", correct: false } ],
        explanation: "伸張性収縮（Eccentric Contraction）は、筋肉が伸びながら力を発揮する収縮様式です。ダンベルを下ろす動作（アームカールの下ろす局面）などがこれに該当し、筋損傷や筋肥大に特に効果的とされています。",
        difficulty: "初級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "骨格筋の最小単位で、筋収縮の直接的なメカニズムを担う構造は何ですか？",
        answers: [ { text: "筋線維", correct: false }, { text: "筋原線維", correct: false }, { text: "サルコメア（筋節）", correct: true }, { text: "筋束", correct: false } ],
        explanation: "サルコメアは、筋原線維を構成する最小の機能単位であり、アクチンフィラメントとミオシンフィラメントが重なり合って配置されています。筋収縮はこのサルコメアが短縮することで起こります。",
        difficulty: "中級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "運動中に心拍数が上昇する主な生理学的理由は何ですか？",
        answers: [ { text: "体温を下げるため", correct: false }, { text: "筋肉への酸素供給量を増やすため", correct: true }, { text: "脂肪の燃焼を促進するため", correct: false }, { text: "疲労物質を蓄積するため", correct: false } ],
        explanation: "運動強度が増すと、筋肉はより多くの酸素を必要とします。心臓は、より多くの血液（酸素を運ぶ）を筋肉に送り出すために、心拍数を上げて心拍出量を増加させます。",
        difficulty: "初級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "最大酸素摂取量（VO2max）とは、何を意味しますか？",
        answers: [ { text: "1分間に摂取できる酸素の最大量", correct: true }, { text: "1分間に消費できるカロリーの最大量", correct: false }, { text: "最大心拍数", correct: false }, { text: "最大筋力", correct: false } ],
        explanation: "VO2maxは、運動中に体が利用できる酸素の最大量を示す指標であり、有酸素性持久力の最も優れた指標とされています。",
        difficulty: "中級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "運動後の「超回復」とは、どのような現象ですか？",
        answers: [ { text: "運動中に筋肉が破壊されること", correct: false }, { text: "運動によって疲労した身体が、休息と栄養によって運動前よりも高いレベルに回復すること", correct: true }, { text: "運動中に心拍数が急激に上昇すること", correct: false }, { text: "運動後に体脂肪が急激に減少すること", correct: false } ],
        explanation: "超回復（Supercompensation）は、トレーニングによって一時的に低下した身体機能が、適切な休息と栄養補給によって、トレーニング前よりも高いレベルに回復する現象です。この超回復のサイクルを繰り返すことで、体力やパフォーマンスが向上します。",
        difficulty: "初級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "骨格筋のタイプで、遅筋線維（Type I）の主な特徴は何ですか？",
        answers: [ { text: "速く収縮し、大きな力を発揮する", correct: false }, { text: "持久力に優れ、有酸素性能力が高い", correct: true }, { text: "疲労しやすい", correct: false }, { text: "主に瞬発的な運動で使われる", correct: false } ],
        explanation: "遅筋線維（赤筋）は、ミトコンドリアや毛細血管が豊富で、酸素を効率的に利用してATPを生成するため、持久的な運動に適しています。収縮速度は遅いですが、疲労しにくいという特徴があります。",
        difficulty: "中級", category: "Part 1: エクササイズサイエンス"
    },
    // 11-20
    {
        question: "骨格筋のタイプで、速筋線維（Type IIx）の主な特徴は何ですか？",
        answers: [ { text: "持久力に優れ、疲労しにくい", correct: false }, { text: "遅く収縮し、小さな力を発揮する", correct: false }, { text: "速く収縮し、大きな力を発揮するが、疲労しやすい", correct: true }, { text: "有酸素性能力が高い", correct: false } ],
        explanation: "速筋線維（白筋）の中でもType IIxは、最も速く収縮し、大きな力を発揮できますが、疲労しやすいという特徴があります。主に瞬発的な運動や高強度な筋力トレーニングで動員されます。",
        difficulty: "中級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "関節の可動域（ROM）を制限する主な要因として、最も影響が大きいものはどれですか？",
        answers: [ { text: "骨の形状", correct: false }, { text: "関節包や靭帯の硬さ", correct: true }, { text: "筋肉の太さ", correct: false }, { text: "体脂肪率", correct: false } ],
        explanation: "関節の可動域は、骨の形状、関節包、靭帯、筋肉、腱、皮膚など様々な組織によって制限されますが、特に関節包や靭帯の硬さが可動域に大きな影響を与えます。",
        difficulty: "上級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "運動中に筋肉で乳酸が生成される主なエネルギー供給経路は何ですか？",
        answers: [ { text: "ATP-PCrシステム", correct: false }, { text: "解糖系（嫌気性解糖）", correct: true }, { text: "クエン酸回路", correct: false }, { text: "電子伝達系", correct: false } ],
        explanation: "解糖系は、酸素が十分に供給されない状況（嫌気的環境）でもグルコースを分解してATPを生成する経路です。この過程でピルビン酸が乳酸に変換され、筋肉や血液中に蓄積します。",
        difficulty: "中級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "心臓の1回の拍動で送り出される血液の量を何と呼びますか？",
        answers: [ { text: "心拍数", correct: false }, { text: "心拍出量", correct: false }, { text: "一回拍出量", correct: true }, { text: "血圧", correct: false } ],
        explanation: "一回拍出量（Stroke Volume）は、心臓が1回の収縮で大動脈に送り出す血液の量です。心拍出量（Cardiac Output）は、一回拍出量と心拍数を掛け合わせたものです。",
        difficulty: "初級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "運動によって骨密度が向上する主なメカニズムは何ですか？",
        answers: [ { text: "骨が柔らかくなるため", correct: false }, { text: "骨に機械的なストレス（負荷）がかかることで、骨形成が促進されるため", correct: true }, { text: "カルシウムの吸収が阻害されるため", correct: false }, { text: "骨の長さが伸びるため", correct: false } ],
        explanation: "骨は、重力や筋肉の収縮による機械的なストレス（メカニカルストレス）を受けることで、骨芽細胞の働きが活性化され、骨形成が促進されます。特に、ウェイトトレーニングやジャンプ運動のような高負荷の運動が骨密度向上に効果的です。",
        difficulty: "中級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "神経系の適応で、筋力向上に最も早く寄与するものは何ですか？",
        answers: [ { text: "筋肥大", correct: false }, { text: "筋線維タイプの変化", correct: false }, { text: "運動単位の動員数増加と発火頻度の上昇", correct: true }, { text: "ミトコンドリアの増加", correct: false } ],
        explanation: "トレーニング初期の筋力向上は、主に神経系の適応によるものです。特に、より多くの運動単位（神経と筋線維のセット）を動員できるようになることや、それらの発火頻度（神経からの信号の頻度）が上昇することで、筋肉がより効率的に、より大きな力を発揮できるようになります。筋肥大は、その後の長期的な適応です。",
        difficulty: "上級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "関節の動きで、体幹を横に曲げる動きを何と呼びますか？",
        answers: [ { text: "屈曲", correct: false }, { text: "伸展", correct: false }, { text: "側屈", correct: true }, { text: "回旋", correct: false } ],
        explanation: "側屈（Lateral Flexion）は、脊柱が左右どちらかの方向に曲がる動きです。",
        difficulty: "初級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "運動中に体温が上昇した際、体温調節のために最も重要な役割を果たすのは何ですか？",
        answers: [ { text: "震え", correct: false }, { text: "発汗", correct: true }, { text: "血管収縮", correct: false }, { text: "筋肉の収縮", correct: false } ],
        explanation: "運動によって体温が上昇すると、体は汗をかくことで熱を放散し、体温を下げようとします。汗が蒸発する際に皮膚表面から熱が奪われる（気化熱）ことで、体温が調節されます。",
        difficulty: "初級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "呼吸商（RQ）が1.0に近い場合、主なエネルギー源として何が利用されていますか？",
        answers: [ { text: "脂質", correct: false }, { text: "タンパク質", correct: false }, { text: "炭水化物", correct: true }, { text: "アルコール", correct: false } ],
        explanation: "呼吸商（Respiratory Quotient）は、体内で消費された酸素量と排出された二酸化炭素量の比率で、運動中にどの栄養素がエネルギーとして使われているかを推定する指標です。炭水化物が主に利用されている場合、RQは1.0に近づきます。脂質が主に利用されている場合は0.7に近づきます。",
        difficulty: "上級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "筋肉の成長（筋肥大）に最も直接的に関わる細胞は何ですか？",
        answers: [ { text: "神経細胞", correct: false }, { text: "脂肪細胞", correct: false }, { text: "衛星細胞（サテライトセル）", correct: true }, { text: "骨細胞", correct: false } ],
        explanation: "衛星細胞は、筋線維の表面に存在する幹細胞のような細胞です。筋損傷やトレーニング刺激によって活性化され、筋線維の修復や成長（筋肥大）に重要な役割を果たします。",
        difficulty: "上級", category: "Part 1: エクササイズサイエンス"
    },
    // 21-30
    {
        question: "関節の動きで、体幹を前に曲げる動きを何と呼びますか？",
        answers: [ { text: "伸展", correct: false }, { text: "屈曲", correct: true }, { text: "外転", correct: false }, { text: "内転", correct: false } ],
        explanation: "屈曲（Flexion）は、関節の角度が小さくなる動き、または体幹が前方に曲がる動きです。",
        difficulty: "初級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "運動中に心拍数が最大値に達した状態を何と呼びますか？",
        answers: [ { text: "安静時心拍数", correct: false }, { text: "目標心拍数", correct: false }, { text: "最大心拍数", correct: true }, { text: "回復期心拍数", correct: false } ],
        explanation: "最大心拍数（Maximum Heart Rate, HRmax）は、運動中に心臓が1分間に拍動できる最大の回数です。年齢とともに低下する傾向があります。",
        difficulty: "初級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "骨格筋の収縮において、アクチンフィラメントがミオシンフィラメント上を滑り込むことで筋が短縮するという理論を何と呼びますか？",
        answers: [ { text: "テコの原理", correct: false }, { text: "滑り説（Sliding Filament Theory）", correct: true }, { text: "超回復理論", correct: false }, { text: "SAIDの原則", correct: false } ],
        explanation: "滑り説（Sliding Filament Theory）は、筋収縮のメカニズムを説明する最も広く受け入れられている理論です。筋線維内のサルコメアにおいて、アクチンとミオシンというタンパク質が互いに滑り込むことで、筋が短縮し、力が発揮されます。",
        difficulty: "上級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "運動後のEPOC（運動後過剰酸素消費量）とは、何を意味しますか？",
        answers: [ { text: "運動中に消費される酸素量", correct: false }, { text: "運動後に安静時よりも多く消費される酸素量", correct: true }, { text: "運動中に心拍数が上昇する量", correct: false }, { text: "運動中に体温が上昇する量", correct: false } ],
        explanation: "EPOC（Excess Post-exercise Oxygen Consumption）は、運動終了後も体が安静時よりも多くの酸素を消費し続ける現象です。これは、運動によって乱れた体内の状態（体温、ホルモン、ATP-PCr系の回復、乳酸の処理など）を元に戻すためにエネルギーが使われるためです。",
        difficulty: "中級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "関節の動きで、体幹を後ろに反らす動きを何と呼びますか？",
        answers: [ { text: "屈曲", correct: false }, { text: "伸展", correct: true }, { text: "外転", correct: false }, { text: "内転", correct: false } ],
        explanation: "伸展（Extension）は、関節の角度が大きくなる動き、または体幹が後方に反る動きです。",
        difficulty: "初級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "骨格筋のタイプで、速筋線維（Type IIa）の主な特徴は何ですか？",
        answers: [ { text: "持久力に優れ、疲労しにくい", correct: false }, { text: "遅く収縮し、小さな力を発揮する", correct: false }, { text: "速く収縮し、比較的大きな力を発揮し、Type IIxよりは疲労しにくい", correct: true }, { text: "有酸素性能力が低い", correct: false } ],
        explanation: "Type IIa線維は、Type I線維とType IIx線維の中間的な特性を持ちます。速く収縮して大きな力を発揮できますが、Type IIxほど疲労しやすくなく、ある程度の持久力も持ち合わせています。",
        difficulty: "中級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "運動によって心臓が肥大する適応で、主に心室の容積が増加し、一回拍出量が増えるのはどのようなトレーニングによるものですか？",
        answers: [ { text: "高強度の筋力トレーニング", correct: false }, { text: "長時間の有酸素運動", correct: true }, { text: "短時間の瞬発的な運動", correct: false }, { text: "柔軟運動", correct: false } ],
        explanation: "長時間の有酸素運動（例：マラソン、水泳）は、心臓に血液を送り込む負荷（前負荷）を増やすため、心室が拡張し、容積が増加する「容量負荷型肥大」を引き起こします。これにより、1回の拍動でより多くの血液を送り出せるようになり、心肺機能が向上します。",
        difficulty: "上級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "関節の動きで、体幹をひねる動きを何と呼びますか？",
        answers: [ { text: "屈曲", correct: false }, { text: "伸展", correct: false }, { text: "側屈", correct: false }, { text: "回旋", correct: true } ],
        explanation: "回旋（Rotation）は、体幹や四肢がその長軸を中心に回転する動きです。",
        difficulty: "初級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "運動中の呼吸数が増加する主な生理学的理由は何ですか？",
        answers: [ { text: "体温を下げるため", correct: false }, { text: "血液中の二酸化炭素濃度を下げ、酸素を取り込むため", correct: true }, { text: "筋肉の疲労を早めるため", correct: false }, { text: "水分を排出するため", correct: false } ],
        explanation: "運動強度が増すと、体内で二酸化炭素の生成が増え、酸素の需要も高まります。呼吸数を増やすことで、二酸化炭素を効率的に排出し、新鮮な酸素を体内に取り込み、血液のpHバランスを維持しようとします。",
        difficulty: "中級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "運動によって骨格筋の毛細血管密度が増加する主な目的は何ですか？",
        answers: [ { text: "筋肥大を促進するため", correct: false }, { text: "酸素や栄養素の供給、老廃物の除去を効率化するため", correct: true }, { text: "筋力発揮を阻害するため", correct: false }, { text: "疲労を早めるため", correct: false } ],
        explanation: "毛細血管は、筋肉細胞に酸素や栄養素を届け、二酸化炭素や老廃物を回収する役割を担っています。有酸素運動などによって毛細血管密度が増加すると、これらの物質交換がより効率的に行われるようになり、持久力向上に貢献します。",
        difficulty: "上級", category: "Part 1: エクササイズサイエンス"
    },
    // 31-40
    {
        question: "筋紡錘（Muscle Spindle）の主な役割は何ですか？",
        answers: [ { text: "腱の張力を感知する", correct: false }, { text: "筋肉の長さの変化と変化の速度を感知し、伸張反射を引き起こす", correct: true }, { text: "関節の角度を感知する", correct: false }, { text: "痛みを感知する", correct: false } ],
        explanation: "筋紡錘は、筋肉の内部に存在する感覚受容器で、筋肉がどれくらい伸びているか、どれくらいの速さで伸びているかを感知します。急激な伸展が起こると、筋肉の損傷を防ぐために伸張反射（筋肉を収縮させる反射）を引き起こします。",
        difficulty: "上級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "ゴルジ腱器官（Golgi Tendon Organ, GTO）の主な役割は何ですか？",
        answers: [ { text: "筋肉の長さの変化を感知する", correct: false }, { text: "腱にかかる張力（力）の大きさを感知し、過度な張力から筋肉を保護する", correct: true }, { text: "関節の動きの速度を感知する", correct: false }, { text: "体温の変化を感知する", correct: false } ],
        explanation: "ゴルジ腱器官は、腱に存在する感覚受容器で、筋肉が発揮する張力の大きさを感知します。過度な張力がかかると、筋肉の損傷を防ぐために、その筋肉の収縮を抑制する反射（自原抑制）を引き起こします。",
        difficulty: "上級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "運動によって心臓が肥大する適応で、主に心室の壁が厚くなり、収縮力が増すのはどのようなトレーニングによるものですか？",
        answers: [ { text: "長時間の有酸素運動", correct: false }, { text: "高強度の筋力トレーニング", correct: true }, { text: "短時間の瞬発的な運動", correct: false }, { text: "柔軟運動", correct: false } ],
        explanation: "高強度の筋力トレーニング（レジスタンストレーニング）は、心臓が血液を送り出す際の抵抗（後負荷）を増やすため、心室の壁が厚くなる「圧負荷型肥大」を引き起こします。これにより、心臓の収縮力が増し、より強い力で血液を送り出せるようになります。",
        difficulty: "上級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "運動中のエネルギー代謝において、脂肪がエネルギー源として利用される際に、最終的にATPを生成する主要な経路は何ですか？",
        answers: [ { text: "解糖系", correct: false }, { text: "クエン酸回路（TCAサイクル）と電子伝達系", correct: true }, { text: "ATP-PCrシステム", correct: false }, { text: "コリ回路", correct: false } ],
        explanation: "脂肪（トリグリセリド）は、まず脂肪酸とグリセロールに分解されます。脂肪酸はβ酸化によってアセチルCoAとなり、クエン酸回路に入ります。クエン酸回路で生成されたNADHやFADH2が電子伝達系で大量のATPを生成します。これらはすべて酸素を必要とする有酸素性経路です。",
        difficulty: "上級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "運動によって骨格筋のミトコンドリア数が増加する主な目的は何ですか？",
        answers: [ { text: "筋力発揮を阻害するため", correct: false }, { text: "有酸素性エネルギー産生能力を高め、持久力を向上させるため", correct: true }, { text: "筋肥大を促進するため", correct: false }, { text: "疲労を早めるため", correct: false } ],
        explanation: "ミトコンドリアは、細胞内で酸素を用いてATPを生成する「エネルギー工場」です。有酸素運動などによってミトコンドリアの数やサイズが増加すると、脂肪や糖質を効率的にエネルギーに変換できるようになり、持久力が向上します。",
        difficulty: "中級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "運動中の呼吸において、肺活量（Vital Capacity）とは何を意味しますか？",
        answers: [ { text: "1回の呼吸で吸い込める空気の量", correct: false }, { text: "最大限に息を吸い込んだ後、最大限に吐き出せる空気の最大量", correct: true }, { text: "安静時の呼吸量", correct: false }, { text: "肺に残る空気の量", correct: false } ],
        explanation: "肺活量（Vital Capacity）は、呼吸器系の機能を示す指標の一つで、努力性最大吸気後の努力性最大呼気量です。つまり、肺に出し入れできる空気の最大量を示します。",
        difficulty: "中級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "運動によって筋肉のグリコーゲン貯蔵量が増加する現象を何と呼びますか？",
        answers: [ { text: "グリコーゲン分解", correct: false }, { text: "グリコーゲン合成（グリコーゲンローディング）", correct: true }, { text: "糖新生", correct: false }, { text: "脂肪分解", correct: false } ],
        explanation: "グリコーゲン合成（Glycogenesis）は、グルコースからグリコーゲンを合成するプロセスです。特に、運動後の適切な炭水化物摂取によって、筋肉や肝臓のグリコーゲン貯蔵量を運動前よりも増やすことを「グリコーゲンローディング」と呼び、持久力向上に役立ちます。",
        difficulty: "初級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "運動中の心拍数と運動強度の関係について、最も適切な記述はどれですか？",
        answers: [ { text: "運動強度が高くなると心拍数は低下する", correct: false }, { text: "運動強度が高くなると心拍数は直線的に上昇する傾向がある", correct: true }, { text: "運動強度と心拍数には関係がない", correct: false }, { text: "運動強度が高くなると心拍数は一定になる", correct: false } ],
        explanation: "運動強度が増加するにつれて、体が必要とする酸素量が増えるため、心臓はより多くの血液を送り出そうとします。これにより、心拍数は運動強度にほぼ比例して直線的に上昇する傾向があります。この関係は、運動強度を管理する上で重要な指標となります。",
        difficulty: "初級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "運動によって骨格筋の筋線維が太くなる現象を何と呼びますか？",
        answers: [ { text: "筋萎縮", correct: false }, { text: "筋肥大（Hypertrophy）", correct: true }, { text: "筋過形成（Hyperplasia）", correct: false }, { text: "筋線維化", correct: false } ],
        explanation: "筋肥大（Hypertrophy）は、レジスタンストレーニングなどによって、個々の筋線維の断面積が増加する現象です。これにより、筋肉全体のサイズが大きくなり、筋力も向上します。",
        difficulty: "初級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "運動中の体温調節において、熱放散の主要なメカニズムとして、体表面から直接熱が空気中に移動する現象を何と呼びますか？",
        answers: [ { text: "蒸発（Evaporation）", correct: false }, { text: "対流（Convection）", correct: true }, { text: "伝導（Conduction）", correct: false }, { text: "放射（Radiation）", correct: false } ],
        explanation: "対流（Convection）は、体表面の熱が、その周囲を流れる空気や水に移動することで熱が放散される現象です。風に当たったり、扇風機を使ったりすると涼しく感じるのはこの効果です。蒸発（発汗）は最も効率的な熱放散メカニズムです。",
        difficulty: "上級", category: "Part 1: エクササイズサイエンス"
    },
    // 41-50
    {
        question: "運動中のエネルギー代謝において、糖質がエネルギー源として利用される際に、最終的にATPを生成する主要な経路は何ですか？",
        answers: [ { text: "脂肪分解", correct: false }, { text: "解糖系、クエン酸回路、電子伝達系", correct: true }, { text: "タンパク質合成", correct: false }, { text: "尿素回路", correct: false } ],
        explanation: "糖質（グルコース）は、まず解糖系でピルビン酸に分解され、その後、酸素が十分にあればピルビン酸はアセチルCoAとなり、クエン酸回路と電子伝達系を経て大量のATPを生成します。酸素が不足していれば、ピルビン酸は乳酸に変換されます。",
        difficulty: "中級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "運動によって骨格筋の筋線維数が増加する現象を何と呼びますか？",
        answers: [ { text: "筋肥大", correct: false }, { text: "筋過形成（Hyperplasia）", correct: true }, { text: "筋萎縮", correct: false }, { text: "筋線維化", correct: false } ],
        explanation: "筋過形成（Hyperplasia）は、筋線維の数自体が増加する現象です。ヒトにおいては、筋肥大が筋力増加の主要なメカニズムとされていますが、一部の研究では筋過形成も起こりうると考えられています。",
        difficulty: "上級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "運動中の心拍数と血圧の関係について、最も適切な記述はどれですか？",
        answers: [ { text: "運動強度が高くなると心拍数と収縮期血圧は上昇する", correct: true }, { text: "運動強度が高くなると心拍数は上昇するが、血圧は低下する", correct: false }, { text: "運動強度と心拍数、血圧には関係がない", correct: false }, { text: "運動強度が高くなると心拍数と拡張期血圧は上昇する", correct: false } ],
        explanation: "運動強度が増加すると、心臓はより多くの血液を送り出すため心拍数が上昇し、それに伴い収縮期血圧（心臓が収縮したときの血圧）も上昇します。拡張期血圧（心臓が拡張したときの血圧）は、運動中はあまり変化しないか、わずかに低下することもあります。",
        difficulty: "中級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "運動によって骨格筋の筋グリコーゲン貯蔵能力が増加する主な目的は何ですか？",
        answers: [ { text: "脂肪の燃焼を促進するため", correct: false }, { text: "持久的な運動のエネルギー源を確保し、疲労を遅らせるため", correct: true }, { text: "筋力発揮を阻害するため", correct: false }, { text: "体温調節を効率化するため", correct: false } ],
        explanation: "筋グリコーゲンは、運動時の主要なエネルギー源の一つです。特に持久的な運動では、筋グリコーゲンの枯渇が疲労の原因となります。トレーニングによって貯蔵能力が増加することで、より長く運動を継続できるようになります。",
        difficulty: "初級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "運動中の呼吸において、1分間あたりの換気量（分時換気量）が増加する主なメカニズムは何ですか？",
        answers: [ { text: "呼吸数の増加のみ", correct: false }, { text: "一回換気量（1回の呼吸量）の増加のみ", correct: false }, { text: "呼吸数と一回換気量の両方の増加", correct: true }, { text: "呼吸数の減少", correct: false } ],
        explanation: "分時換気量（Minute Ventilation）は、1分間に肺に出し入れされる空気の総量です。運動強度が増すと、体が必要とする酸素量が増え、二酸化炭素の排出量も増えるため、呼吸数と一回換気量の両方が増加することで、分時換気量が増加します。",
        difficulty: "中級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "運動中の体温調節において、熱放散の主要なメカニズムとして、体表面から周囲の物体へ熱が移動する現象を何と呼びますか？",
        answers: [ { text: "蒸発（Evaporation）", correct: false }, { text: "対流（Convection）", correct: false }, { text: "伝導（Conduction）", correct: false }, { text: "放射（Radiation）", correct: true } ],
        explanation: "放射（Radiation）は、電磁波の形で熱が移動する現象で、体表面から周囲の空気や物体へ熱が放散されます。例えば、寒い部屋で体が冷えるのは、周囲の壁や窓に熱が放射されるためです。",
        difficulty: "上級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "運動中のエネルギー代謝において、タンパク質がエネルギー源として利用される主な状況はどれですか？",
        answers: [ { text: "短時間の高強度運動", correct: false }, { text: "長時間の低〜中強度の運動で、糖質や脂質が枯渇してきた時", correct: true }, { text: "運動開始直後", correct: false }, { text: "筋力トレーニング中", correct: false } ],
        explanation: "タンパク質は、通常、運動中の主要なエネルギー源ではありません。しかし、長時間の運動で糖質や脂質の貯蔵が枯渇してきた場合、アミノ酸が糖新生によってグルコースに変換されたり、直接エネルギーとして利用されたりする割合が増加します。",
        difficulty: "上級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "運動によって骨格筋の筋線維内のミオシンATPase活性が増加する主な目的は何ですか？",
        answers: [ { text: "筋肥大を促進するため", correct: false }, { text: "筋収縮速度を高め、より速く力を発揮できるようにするため", correct: true }, { text: "持久力を向上させるため", correct: false }, { text: "疲労を早めるため", correct: false } ],
        explanation: "ミオシンATPaseは、ATPを分解して筋収縮に必要なエネルギーを供給する酵素です。この活性が高いほど、ATPの分解速度が速くなり、筋線維がより速く収縮し、瞬発的な力を発揮できるようになります。",
        difficulty: "上級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "運動中の体温調節において、熱放散の主要なメカニズムとして、体表面から直接接触している物体へ熱が移動する現象を何と呼びますか？",
        answers: [ { text: "蒸発（Evaporation）", correct: false }, { text: "対流（Convection）", correct: false }, { text: "伝導（Conduction）", correct: true }, { text: "放射（Radiation）", correct: false } ],
        explanation: "伝導（Conduction）は、熱が直接接触している物体間で移動する現象です。例えば、冷たい床に座ると体が冷えるのは、体から床へ熱が伝導するためです。",
        difficulty: "上級", category: "Part 1: エクササイズサイエンス"
    },
    {
        question: "運動中の心拍数と血圧の関係について、運動強度が高くなると拡張期血圧はどのように変化する傾向がありますか？",
        answers: [ { text: "上昇する", correct: false }, { text: "低下する、またはほとんど変化しない", correct: true }, { text: "常に一定である", correct: false }, { text: "急激に変動する", correct: false } ],
        explanation: "運動強度が増加すると、筋肉への血流を増やすために末梢血管が拡張するため、拡張期血圧（心臓が拡張したときの血圧）は、あまり変化しないか、わずかに低下する傾向があります。これは、収縮期血圧が上昇するのとは対照的です。",
        difficulty: "上級", category: "Part 1: エクササイズサイエンス"
    }
];
