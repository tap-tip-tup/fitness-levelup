
const nutritionQuestions = [
    // 1-10
    {
        question: "運動直後の栄養補給（リカバリー）において、最も重要とされる栄養素の組み合わせはどれですか？",
        answers: [ { text: "脂質とビタミン", correct: false }, { text: "タンパク質と炭水化物", correct: true }, { text: "食物繊維とミネラル", correct: false }, { text: "脂質のみ", correct: false } ],
        explanation: "運動で枯渇した筋グリコーゲンを補充するために炭水化物が、損傷した筋線維を修復・成長させるためにタンパク質が必要です。この2つを同時に摂取することが、効果的なリカバリーを促進します。",
        difficulty: "初級", category: "栄養"
    },
    {
        question: "クレアチンリン酸システムが主にエネルギーを供給する運動の持続時間として、最も適切なものはどれですか？",
        answers: [ { text: "0〜10秒", correct: true }, { text: "30〜60秒", correct: false }, { text: "2〜3分", correct: false }, { text: "5分以上", correct: false } ],
        explanation: "クレアチンリン酸（ATP-PCr）システムは、非常に高い強度の運動の開始時に、即座にエネルギーを供給する役割を担います。その供給時間は約10秒程度と非常に短いです。",
        difficulty: "中級", category: "栄養"
    },
    {
        question: "長距離走のような持久系アスリートにとって、パフォーマンス維持のために特に重要となる主要なエネルギー源は何ですか？",
        answers: [ { text: "グリコーゲン（炭水化物）", correct: true }, { text: "アミノ酸（タンパク質）", correct: false }, { text: "遊離脂肪酸（脂質）", correct: false }, { text: "ケトン体", correct: false } ],
        explanation: "長時間の持久運動では、筋肉や肝臓に貯蔵されているグリコーゲンが主要なエネルギー源として利用されます。グリコーゲンの枯渇は、疲労やパフォーマンス低下の直接的な原因となります。",
        difficulty: "上級", category: "栄養"
    },
    {
        question: "次のうち、脂溶性ビタミンはどれですか？",
        answers: [ { text: "ビタミンC", correct: false }, { text: "ビタミンB群", correct: false }, { text: "ビタミンA", correct: true }, { text: "葉酸", correct: false } ],
        explanation: "脂溶性ビタミンは、脂肪に溶けやすく、体内に貯蔵されやすい性質を持つビタミンです。ビタミンA、D、E、Kがこれに該当します。ビタミンB群とCは水溶性ビタミンです。",
        difficulty: "初級", category: "栄養"
    },
    {
        question: "グリセミック指数（GI）とは、何を測るための指標ですか？",
        answers: [ { text: "食品に含まれる糖質の量", correct: false }, { text: "食後の血糖値の上昇度合い", correct: true }, { text: "食品のカロリー", correct: false }, { text: "食品に含まれるタンパク質の質", correct: false } ],
        explanation: "グリセミック指数（Glycemic Index）は、特定の食品を摂取した後の血糖値が、どのくらい速く、どのくらい高く上昇するかを示す指標です。アスリートのエネルギー補給戦略などに用いられます。",
        difficulty: "中級", category: "栄養"
    },
    {
        question: "必須アミノ酸をすべて含んでいるタンパク質を何と呼びますか？",
        answers: [ { text: "不完全タンパク質", correct: false }, { text: "完全タンパク質（高品質タンパク質）", correct: true }, { text: "単純タンパク質", correct: false }, { text: "複合タンパク質", correct: false } ],
        explanation: "完全タンパク質は、体内で合成できない9種類の必須アミノ酸をすべて適切な比率で含んでいる食品です。動物性食品（肉、魚、卵、乳製品）の多くがこれに該当します。",
        difficulty: "中級", category: "栄養"
    },
    {
        question: "持久系アスリートが試合の数日前に炭水化物の摂取量を極端に増やす食事戦略を何と呼びますか？",
        answers: [ { text: "ケトジェニックダイエット", correct: false }, { text: "カーボローディング", correct: true }, { text: "プロテインローディング", correct: false }, { text: "ファットアダプテーション", correct: false } ],
        explanation: "カーボローディング（またはグリコーゲンローディング）は、運動前に体内のグリコーゲン貯蔵量を通常以上に高めることで、持久的なパフォーマンスを向上させることを目的とした食事戦略です。",
        difficulty: "上級", category: "栄養"
    },
    {
        question: "運動中の水分補給に関する一般的なガイドラインとして、適切なものはどれですか？",
        answers: [ { text: "喉が渇いてから飲む", correct: false }, { text: "運動終了後にまとめて飲む", correct: false }, { text: "15〜20分ごとに150〜350ml程度の水分を計画的に摂取する", correct: true }, { text: "糖分濃度の高いジュースを飲む", correct: false } ],
        explanation: "喉の渇きはすでに脱水が始まっているサインです。パフォーマンスの低下や熱中症のリスクを防ぐため、喉が渇く前に計画的に、定期的な水分補給を行うことが推奨されます。",
        difficulty: "初級", category: "栄養"
    },
    {
        question: "三大栄養素（タンパク質、脂質、炭水化物）のうち、1gあたりのエネルギー量が最も多いのはどれですか？",
        answers: [ { text: "タンパク質", correct: false }, { text: "脂質", correct: true }, { text: "炭水化物", correct: false }, { text: "すべて同じ", correct: false } ],
        explanation: "1gあたりのエネルギー量は、タンパク質が約4kcal、炭水化物が約4kcalであるのに対し、脂質は約9kcalと最も高カロリーな栄養素です。",
        difficulty: "初級", category: "栄養"
    },
    {
        question: "分岐鎖アミノ酸（BCAA）に含まれないアミノ酸は次のうちどれですか？",
        answers: [ { text: "ロイシン", correct: false }, { text: "イソロイシン", correct: false }, { text: "バリン", correct: false }, { text: "グルタミン", correct: true } ],
        explanation: "分岐鎖アミノ酸（Branched-Chain Amino Acids）は、ロイシン、イソロイシン、バリンの3つの必須アミノ酸の総称です。グルタミンは、体内で最も豊富な非必須アミノ酸ですが、BCAAには含まれません。",
        difficulty: "中級", category: "栄養"
    },
    // 11-20
    {
        question: "体重を1kg減らすためには、おおよそ何kcalの消費が必要とされていますか？",
        answers: [ { text: "3000 kcal", correct: false }, { text: "5000 kcal", correct: false }, { text: "7200 kcal", correct: true }, { text: "9000 kcal", correct: false } ],
        explanation: "体脂肪1kgをエネルギーに換算すると、約7200kcalに相当します。したがって、食事制限や運動によってこのカロリー分を消費することで、理論上、体重が1kg減少します。",
        difficulty: "中級", category: "栄養"
    },
    {
        question: "解糖系が主なエネルギー供給経路となる運動の持続時間は、およそどのくらいですか？",
        answers: [ { text: "10秒以内", correct: false }, { text: "30秒から2分程度", correct: true }, { text: "10分以上", correct: false }, { text: "1時間以上", correct: false } ],
        explanation: "解糖系は、クレアチンリン酸システムが枯渇した後、主なエネルギー源として働きます。高強度の運動が続く場合、およそ30秒から2分程度の時間、エネルギーを供給します。この過程で乳酸が生成されます。",
        difficulty: "中級", category: "栄養"
    },
    {
        question: "ビタミンDの主な生理作用として、最も重要なものは何ですか？",
        answers: [ { text: "抗酸化作用", correct: false }, { text: "血液凝固作用", correct: false }, { text: "カルシウムとリンの吸収を促進し、骨の健康を維持する", correct: true }, { text: "赤血球の形成を助ける", correct: false } ],
        explanation: "ビタミンDは、腸管からのカルシウム吸収を促進し、血液中のカルシウム濃度を一定に保つことで、丈夫な骨の形成と維持に不可欠な役割を果たします。日光を浴びることで皮膚でも生成されます。",
        difficulty: "初級", category: "栄養"
    },
    {
        question: "アスリートのタンパク質推奨摂取量は、一般的に体重1kgあたりどのくらいとされていますか？",
        answers: [ { text: "0.8g", correct: false }, { text: "1.2〜2.0g", correct: true }, { text: "2.5〜3.0g", correct: false }, { text: "0.5g未満", correct: false } ],
        explanation: "一般成人の推奨量（約0.8g/kg）に対し、アスリートはトレーニングによる筋組織の分解と修復が活発なため、より多くのタンパク質を必要とします。目的やトレーニング強度によりますが、一般的に1.2〜2.0g/kg/日が推奨されています。",
        difficulty: "中級", category: "栄養"
    },
    {
        question: "食事誘発性熱産生（DIT）が最も高い栄養素はどれですか？",
        answers: [ { text: "炭水化物", correct: false }, { text: "脂質", correct: false }, { text: "タンパク質", correct: true }, { text: "ビタミン", correct: false } ],
        explanation: "食事誘発性熱産生とは、食事を消化・吸収する過程で消費されるエネルギーのことです。タンパク質は摂取エネルギーの約30%が消費されるのに対し、炭水化物は約6%、脂質は約4%であり、タンパク質が最も高くなります。",
        difficulty: "上級", category: "栄養"
    },
    {
        question: "鉄分が不足すると、どのような症状が引き起こされやすいですか？",
        answers: [ { text: "骨粗しょう症", correct: false }, { text: "持久力の低下、疲労感、息切れなどの貧血症状", correct: true }, { text: "視力の低下", correct: false }, { text: "筋肉の痙攣", correct: false } ],
        explanation: "鉄は、血液中のヘモグロビンの構成成分であり、全身に酸素を運搬する重要な役割を担っています。鉄が不足すると、酸素運搬能力が低下し、鉄欠乏性貧血を引き起こして持久的なパフォーマンスの低下や慢性的な疲労感に繋がります。",
        difficulty: "初級", category: "栄養"
    },
    {
        question: "運動後の「アナボリックウィンドウ」に関する説明として、最も適切なものはどれですか？",
        answers: [ { text: "運動後24時間は何も食べない方が良いとする理論", correct: false }, { text: "運動後30分〜2時間以内は、栄養素の吸収と筋タンパク合成が特に高まる絶好の機会とする理論", correct: true }, { text: "運動前にのみ栄養補給が重要だとする理論", correct: false }, { text: "脂質のみを摂取すべき時間帯", correct: false } ],
        explanation: "アナボリックウィンドウは、運動後の筋グリコーゲンの再合成や筋タンパク合成が最も活発に行われるとされる時間帯を指す概念です。このタイミングで適切な栄養（特にタンパク質と炭水化物）を補給することが、効果的な回復と成長に繋がると考えられています。",
        difficulty: "中級", category: "栄養"
    },
    {
        question: "飽和脂肪酸が多く含まれる食品は次のうちどれですか？",
        answers: [ { text: "オリーブオイル", correct: false }, { text: "アボカド", correct: false }, { text: "青魚（サバ、イワシなど）", correct: false }, { text: "バターや肉の脂身", correct: true } ],
        explanation: "飽和脂肪酸は、主に動物性の脂肪に多く含まれており、常温で固体のものが多いのが特徴です。過剰摂取は心血管疾患のリスクを高める可能性が指摘されています。オリーブオイルや魚の油は不飽和脂肪酸を多く含みます。",
        difficulty: "初級", category: "栄養"
    },
    {
        question: "クレアチンサプリメントの主な効果として期待されることは何ですか？",
        answers: [ { text: "長距離走のタイム向上", correct: false }, { text: "短時間・高強度の運動パフォーマンス（瞬発力や筋力）の向上", correct: true }, { text: "体脂肪の減少", correct: false }, { text: "睡眠の質の改善", correct: false } ],
        explanation: "クレアチンは、体内でクレアチンリン酸として貯蔵され、ATP-PCr系のエネルギー供給に直接関与します。クレアチンサプリメントの摂取は、体内のクレアチンリン酸貯蔵量を増やし、ウェイトトレーニングやスプリントなどの高強度運動のパフォーマンス向上に貢献します。",
        difficulty: "中級", category: "栄養"
    },
    {
        question: "必須脂肪酸に分類されるのは次のうちどれですか？",
        answers: [ { text: "オメガ3脂肪酸とオメガ6脂肪酸", correct: true }, { text: "トランス脂肪酸", correct: false }, { text: "飽和脂肪酸", correct: false }, { text: "コレステロール", correct: false } ],
        explanation: "必須脂肪酸は、体内で合成することができず、食事から摂取する必要がある脂肪酸です。代表的なものに、α-リノレン酸（オメガ3系）とリノール酸（オメガ6系）があります。これらは細胞膜の構成やホルモンの生成に重要な役割を果たします。",
        difficulty: "上級", category: "栄養"
    },
    // 21-30
    {
        question: "食物繊維の主な働きとして、適切でないものはどれですか？",
        answers: [ { text: "血糖値の急激な上昇を抑える", correct: false }, { text: "便通を改善する", correct: false }, { text: "体内で消化され、主要なエネルギー源となる", correct: true }, { text: "血中コレステロール値を低下させる効果がある", correct: false } ],
        explanation: "食物繊維は、ヒトの消化酵素では分解されないため、エネルギー源としてはほとんど利用されません。しかし、腸内環境を整えたり、糖質の吸収を緩やかにしたり、脂質を吸着して排出したりと、多くの重要な生理機能を持っています。",
        difficulty: "初級", category: "栄養"
    },
    {
        question: "カフェインが運動パフォーマンスに与える影響として、最もよく知られていることは何ですか？",
        answers: [ { text: "筋肉をリラックスさせる", correct: false }, { text: "中枢神経系を興奮させ、疲労感を軽減し、集中力を高める", correct: true }, { text: "筋グリコーゲンの貯蔵を促進する", correct: false }, { text: "睡眠を誘発する", correct: false } ],
        explanation: "カフェインは、中枢神経系に作用して覚醒レベルを高め、運動中の疲労の知覚を減少させる効果（エルゴジェニックエイド）があります。これにより、特に持久系運動や高強度運動のパフォーマンスが向上することが多くの研究で示されています。",
        difficulty: "中級", category: "栄養"
    },
    {
        question: "インスリンというホルモンの主な働きは何ですか？",
        answers: [ { text: "血糖値を上げる", correct: false }, { text: "血液中の糖（グルコース）を細胞に取り込ませ、血糖値を下げる", correct: true }, { text: "脂肪の分解を促進する", correct: false }, { text: "心拍数を増加させる", correct: false } ],
        explanation: "インスリンは、主に食事によって血糖値が上昇した際に、すい臓から分泌されるホルモンです。筋肉や脂肪細胞に働きかけ、血液中のグルコースを取り込ませることで、血糖値を正常な範囲に保つ役割があります。",
        difficulty: "中級", category: "栄養"
    },
    {
        question: "ボディビルダーが減量期に、筋肉量を維持しながら体脂肪を減らすために行う食事戦略として一般的なものは何ですか？",
        answers: [ { text: "炭水化物の摂取をゼロにする", correct: false }, { text: "総摂取カロリーを基礎代謝以下に設定する", correct: false }, { text: "高タンパク質食を維持しつつ、総摂取カロリーを消費カロリーよりわずかに少なく設定する", correct: true }, { text: "タンパク質の摂取を極端に減らす", correct: false } ],
        explanation: "筋肉量を維持するためには、十分なタンパク質の摂取が不可欠です。その上で、摂取カロリーを消費カロリーより少しだけ下回る状態（カロリーデフィシット）を作ることで、体脂肪の減少を促します。極端なカロリー制限は筋肉の分解を招きます。",
        difficulty: "上級", category: "栄養"
    },
    {
        question: "抗酸化作用を持つビタミンとして知られ、「若返りのビタミン」とも呼ばれるのはどれですか？",
        answers: [ { text: "ビタミンK", correct: false }, { text: "ビタミンD", correct: false }, { text: "ビタミンE", correct: true }, { text: "ビタミンB1", correct: false } ],
        explanation: "ビタミンEは、細胞膜の酸化を防ぐ強力な抗酸化作用を持ち、体内の不飽和脂肪酸が酸化されるのを防ぎます。この働きから、老化や生活習慣病の予防に関連があると考えられています。",
        difficulty: "初級", category: "栄養"
    },
    {
        question: "スポーツドリンクに含まれる糖質濃度として、吸収効率の観点から一般的に推奨される範囲はどれですか？",
        answers: [ { text: "1%未満", correct: false }, { text: "4〜8%", correct: true }, { text: "10〜15%", correct: false }, { text: "20%以上", correct: false } ],
        explanation: "糖質濃度が高すぎると、胃での滞留時間が長くなり、水分吸収の速度が遅くなります。運動中の水分補給を目的とする場合、腸管での吸収がスムーズに行われる4〜8%程度の糖質濃度（アイソトニックまたはハイポトニック）が適しているとされています。",
        difficulty: "中級", category: "栄養"
    },
    {
        question: "基礎代謝量（BMR）に最も大きな影響を与える要因は何ですか？",
        answers: [ { text: "年齢", correct: false }, { text: "性別", correct: false }, { text: "除脂肪体重（筋肉量）", correct: true }, { text: "食事内容", correct: false } ],
        explanation: "基礎代謝量とは、生命維持に必要な最小限のエネルギー消費量のことです。筋肉は脂肪組織に比べて多くのエネルギーを消費するため、除脂肪体重、特に筋肉量の多さが、基礎代謝量の最も大きな決定要因となります。",
        difficulty: "中級", category: "栄養"
    },
    {
        question: "無酸素性作業閾値（AT）または乳酸性作業閾値（LT）を超えた運動強度でトレーニングを続けると、体内で何が急激に蓄積しますか？",
        answers: [ { text: "乳酸と水素イオン", correct: true }, { text: "クレアチン", correct: false }, { text: "グリコーゲン", correct: false }, { text: "酸素", correct: false } ],
        explanation: "ATやLTは、有酸素的なエネルギー供給だけでは需要をまかなえなくなり、無酸素的な解糖系からのエネルギー供給の割合が急増する運動強度の境界点です。この点を超えると、エネルギー産生の副産物である乳酸と水素イオンが血中に急激に蓄積し始め、アシドーシス（酸性化）が進行して疲労の原因となります。",
        difficulty: "上級", category: "栄養"
    },
    {
        question: "ベジタリアンやヴィーガンのアスリートが特に意識して摂取すべき栄養素として、適切でないものはどれですか？",
        answers: [ { text: "ビタミンB12", correct: false }, { text: "鉄分", correct: false }, { text: "タンパク質", correct: false }, { text: "ビタミンC", correct: true } ],
        explanation: "ビタミンB12は主に動物性食品に含まれるため、植物性食品のみを摂取するヴィーガンは欠乏のリスクが非常に高いです。また、植物性の鉄（非ヘム鉄）は吸収率が低いため、意識的な摂取が必要です。タンパク質もアミノ酸スコアを考慮する必要があります。一方、ビタミンCは果物や野菜に豊富なので、不足のリスクは低いです。",
        difficulty: "中級", category: "栄養"
    },
    {
        question: "ナトリウムの主な生理機能は何ですか？",
        answers: [ { text: "骨の主成分となる", correct: false }, { text: "体液の浸透圧を調節し、神経伝達や筋収縮に関与する", correct: true }, { text: "酸素を運搬する", correct: false }, { text: "エネルギー源となる", correct: false } ],
        explanation: "ナトリウムは、細胞外液の主要な陽イオンであり、体内の水分バランスや浸透圧の維持に中心的な役割を果たします。また、神経の興奮や筋肉の収縮といった、生命活動の根幹に関わるプロセスにも不可欠なミネラルです。",
        difficulty: "初級", category: "栄養"
    },
    // 31-40
    {
        question: "「グリセミック負荷（GL）」とは、何を評価するための指標ですか？",
        answers: [ { text: "食品の重さ", correct: false }, { text: "グリセミック指数（GI）に、その食品に含まれる炭水化物の量を考慮した、より実用的な血糖応答の指標", correct: true }, { text: "食品の保存期間", correct: false }, { text: "タンパク質の品質", correct: false } ],
        explanation: "グリセミック負荷（Glycemic Load）は、「GI × 1食あたりの炭水化物量 ÷ 100」で計算されます。GIが高い食品でも、食べる量が少なければ血糖値への影響は限定的です。GLは、実際にその食品を摂取した際の血糖値への影響をより現実的に評価する指標です。",
        difficulty: "上級", category: "栄養"
    },
    {
        question: "運動後の筋タンパク質合成を最大化するために、1回の食事で摂取するタンパク質の推奨量として、一般的な目安はどれですか？",
        answers: [ { text: "5g", correct: false }, { text: "20〜40g", correct: true }, { text: "80g", correct: false }, { text: "100g以上", correct: false } ],
        explanation: "研究によると、筋タンパク合成の応答は、1食あたり20〜40gの高品質なタンパク質を摂取した際に最大化され、それ以上摂取しても合成率がさらに高まるわけではない（いわゆる天井効果）とされています。",
        difficulty: "中級", category: "栄養"
    },
    {
        question: "トランス脂肪酸の摂取が健康に与える主な悪影響は何ですか？",
        answers: [ { text: "筋力を増強する", correct: false }, { text: "悪玉コレステロール（LDL）を増加させ、善玉コレステロール（HDL）を減少させ、心血管疾患のリスクを高める", correct: true }, { text: "骨密度を高める", correct: false }, { text: "視力を改善する", correct: false } ],
        explanation: "トランス脂肪酸は、マーガリンやショートニング、それらを使用した加工食品に多く含まれる人工的な脂肪酸です。血中の脂質プロファイルを悪化させ、動脈硬化や心筋梗塞などのリスクを著しく高めることが知られており、多くの国で規制されています。",
        difficulty: "初級", category: "栄養"
    },
    {
        question: "長時間の運動中に、エネルギー補給と水分補給を同時に行う場合、どのような飲み物が最も適していますか？",
        answers: [ { text: "水", correct: false }, { text: "糖質と電解質を含むスポーツドリンク", correct: true }, { text: "プロテインシェイク", correct: false }, { text: "濃い果汁ジュース", correct: false } ],
        explanation: "長時間の運動では、水分の損失だけでなく、エネルギー源であるグリコーゲンの枯渇と、汗で失われる電解質（特にナトリウム）の補充が必要です。これらをバランス良く含むスポーツドリンクは、パフォーマンスの維持と脱水症状の予防に最も効果的です。",
        difficulty: "初級", category: "栄養"
    },
    {
        question: "体内で合成できないため、食事から摂取する必要があるアミノ酸を何と呼びますか？",
        answers: [ { text: "非必須アミノ酸", correct: false }, { text: "必須アミノ酸", correct: true }, { text: "条件付き必須アミノ酸", correct: false }, { text: "遊離アミノ酸", correct: false } ],
        explanation: "ヒトの体を構成する20種類のアミノ酸のうち、9種類（成人）は体内で十分に合成することができないため、食事から摂取する必要があります。これらを必須アミノ酸（EAA: Essential Amino Acids）と呼びます。",
        difficulty: "初級", category: "栄養"
    },
    {
        question: "コルチゾールというホルモンが過剰に分泌された場合、身体にどのような影響がありますか？",
        answers: [ { text: "筋肉の合成を促進する", correct: false }, { text: "筋肉の分解（異化）を促進し、免疫機能を抑制する", correct: true }, { text: "食欲を抑制する", correct: false }, { text: "血糖値を下げる", correct: false } ],
        explanation: "コルチゾールは、ストレスに対応するために副腎皮質から分泌されるホルモンですが、過度なトレーニングや慢性的なストレスによって過剰に分泌されると、筋肉を分解してエネルギーに変えたり（異化作用）、免疫力を低下させたりといった、身体にとって不利益な影響を及ぼします。",
        difficulty: "上級", category: "栄養"
    },
    {
        question: "水溶性ビタミンに関する記述として正しいものはどれですか？",
        answers: [ { text: "体内に大量に貯蔵できる", correct: false }, { text: "過剰に摂取しても、尿として排出されやすいため、比較的毒性が低い", correct: true }, { text: "ビタミンA、D、E、Kがこれに分類される", correct: false }, { text: "油と一緒に摂取すると吸収が高まる", correct: false } ],
        explanation: "水溶性ビタミン（ビタミンB群、ビタミンC）は、その名の通り水に溶けやすい性質を持ちます。体内の余剰分は尿中に排泄されやすいため、脂溶性ビタミンに比べて過剰症のリスクは低いですが、その分、こまめに摂取する必要があります。",
        difficulty: "初級", category: "栄養"
    },
    {
        question: "運動開始後、エネルギー源として脂質が主に利用されるようになるのは、どのような状況ですか？",
        answers: [ { text: "短時間の高強度運動", correct: false }, { text: "長時間の低〜中強度の運動", correct: true }, { text: "運動開始直後", correct: false }, { text: "無酸素運動", correct: false } ],
        explanation: "運動開始直後や高強度運動では、主に糖質（グリコーゲン）がエネルギー源として利用されます。しかし、運動時間が長くなり、強度が比較的低い状態が続くと、身体は豊富な貯蔵量を持つ脂質を効率的にエネルギーとして利用するようになります。",
        difficulty: "中級", category: "栄養"
    },
    {
        question: "消化管を持たないため、サプリメントによる栄養摂取が特に有効と考えられる状況はどれですか？",
        answers: [ { text: "運動直後など、迅速な栄養吸収が求められる場合", correct: true }, { text: "通常の食事を楽しみたい場合", correct: false }, { text: "食物繊維を摂取したい場合", correct: false }, { text: "満腹感を得たい場合", correct: false } ],
        explanation: "ホエイプロテインやアミノ酸などのサプリメントは、固形の食品に比べて消化吸収のプロセスが大幅に短縮されます。そのため、トレーニング直後など、できるだけ速やかに筋組織へ栄養を届けたいタイミングでの利用は非常に合理的です。",
        difficulty: "中級", category: "栄養"
    },
    {
        question: "「エンプトカロリー」とは、どのような食品を指しますか？",
        answers: [ { text: "カロリーがゼロの食品", correct: false }, { text: "カロリーは高いが、ビタミンやミネラルなどの有益な栄養素がほとんど含まれていない食品", correct: true }, { text: "栄養価が非常に高い食品", correct: false }, { text: "満腹感を得やすい食品", correct: false } ],
        explanation: "エンプトカロリー（空っぽのカロリー）とは、砂糖が多く含まれる菓子類や清涼飲料水、アルコール飲料など、エネルギー（カロリー）は供給するものの、健康維持に不可欠なビタミン、ミネラル、タンパク質、食物繊維といった栄養素をほとんど含まない食品や飲料を指す言葉です。",
        difficulty: "初級", category: "栄養"
    },
    // 41-50
    {
        question: "レプチンというホルモンの主な役割は何ですか？",
        answers: [ { text: "食欲を増進させる", correct: false }, { text: "脂肪細胞から分泌され、脳に満腹感を伝えて食欲を抑制する", correct: true }, { text: "筋肉の成長を促す", correct: false }, { text: "血糖値を上げる", correct: false } ],
        explanation: "レプチンは、体脂肪量に比例して脂肪細胞から分泌されるホルモンです。脳の視床下部に作用し、「エネルギーは十分に蓄えられている」というシグナルを送り、食欲を抑制し、エネルギー消費を促進する働きがあります。",
        difficulty: "上級", category: "栄養"
    },
    {
        question: "アスリートが試合前の食事で避けるべき食品の特徴は何ですか？",
        answers: [ { text: "消化の良い炭水化物", correct: false }, { text: "高脂肪、高食物繊維の食品", correct: true }, { text: "適度な量のタンパク質", correct: false }, { text: "水分", correct: false } ],
        explanation: "試合直前の食事では、消化に時間がかかり胃腸に負担をかける可能性のある食品は避けるべきです。脂肪や食物繊維は消化が遅く、腹部の不快感やパフォーマンス低下の原因となるため、試合の数時間前は摂取を控えるのが一般的です。",
        difficulty: "中級", category: "栄養"
    },
    {
        question: "カルシウムの吸収を助けるビタミンは何ですか？",
        answers: [ { text: "ビタミンC", correct: false }, { text: "ビタミンB1", correct: false }, { text: "ビタミンD", correct: true }, { text: "ビタミンE", correct: false } ],
        explanation: "ビタミンDは、小腸でのカルシウム吸収を促進する働きがあります。カルシウムを効率的に摂取するためには、ビタミンDを豊富に含む食品（魚類、きのこ類など）を一緒に摂ったり、日光浴をしたりすることが重要です。",
        difficulty: "初級", category: "栄養"
    },
    {
        question: "運動による酸化ストレスに対抗するために重要とされる栄養素は何ですか？",
        answers: [ { text: "飽和脂肪酸", correct: false }, { text: "ビタミンC、ビタミンE、ポリフェノールなどの抗酸化物質", correct: true }, { text: "単純糖質", correct: false }, { text: "ナトリウム", correct: false } ],
        explanation: "激しい運動は、体内で活性酸素の生成を促し、酸化ストレスを高めます。ビタミンCやE、野菜や果物に含まれるポリフェノールなどの抗酸化物質は、これらの活性酸素を無害化し、細胞の損傷を防ぐのに役立ちます。",
        difficulty: "中級", category: "栄養"
    },
    {
        question: "グルコースが筋肉や肝臓で貯蔵される際の形態を何と呼びますか？",
        answers: [ { text: "アミノ酸", correct: false }, { text: "脂肪酸", correct: false }, { text: "グリコーゲン", correct: true }, { text: "フルクトース", correct: false } ],
        explanation: "グルコースは、エネルギーとしてすぐに使われない場合、グリコーゲンという多糖類に変換され、主に筋肉（筋グリコーゲン）と肝臓（肝グリコーゲン）に貯蔵されます。これらは運動時の主要なエネルギー源となります。",
        difficulty: "初級", category: "栄養"
    },
    {
        question: "ケトン体（ケトンボディ）が体内で主にエネルギー源として使われるのは、どのような状態の時ですか？",
        answers: [ { text: "高炭水化物食を摂取している時", correct: false }, { text: "長期間の絶食や、極端な低炭水化物食（ケトジェニックダイエット）を続けている時", correct: true }, { text: "高タンパク質食を摂取している時", correct: false }, { text: "運動直後", correct: false } ],
        explanation: "体内の糖質（グリコーゲン）が枯渇し、エネルギー源として利用できる糖が極端に少なくなると、身体は脂肪酸を分解して肝臓でケトン体を生成し始めます。脳を含む多くの組織が、このケトン体を代替エネルギー源として利用することができます。",
        difficulty: "上級", category: "栄養"
    },
    {
        question: "電解質（ミネラル）の主な役割として、適切でないものはどれですか？",
        answers: [ { text: "体液バランスの維持", correct: false }, { text: "神経機能の調節", correct: false }, { text: "筋肉の収縮と弛緩", correct: false }, { text: "主要なエネルギー源となること", correct: true } ],
        explanation: "電解質（ナトリウム、カリウム、カルシウム、マグネシウムなど）は、体液バランス、神経インパルスの伝達、筋収縮など、極めて重要な生理機能を担っていますが、炭水化物や脂質のように、それ自体がカロリーを持つエネルギー源となることはありません。",
        difficulty: "初級", category: "栄養"
    },
    {
        question: "一般的な成人女性の1日の推定エネルギー必要量（デスクワーク中心）の目安はどのくらいですか？",
        answers: [ { text: "1200 kcal", correct: false }, { text: "2000 kcal", correct: true }, { text: "2800 kcal", correct: false }, { text: "3500 kcal", correct: false } ],
        explanation: "「日本人女性の食事摂取基準（2020年版）」によると、身体活動レベルが「低い」（座位中心の生活）30〜49歳の女性の推定エネルギー必要量は2050kcal/日とされています。個人の体格や年齢、活動量により変動しますが、約2000kcalが一つの目安となります。",
        difficulty: "初級", category: "栄養"
    },
    {
        question: "プロバイオティクスとは何ですか？",
        answers: [ { text: "特定の種類の抗生物質", correct: false }, { text: "腸内環境を改善する、人体に有益な微生物（善玉菌）", correct: true }, { text: "消化酵素の一種", correct: false }, { text: "スポーツドリンクに含まれる糖質", correct: false } ],
        explanation: "プロバイオティクスは、ヨーグルトや納豆、味噌などの発酵食品に含まれる乳酸菌やビフィズス菌のように、生きたまま腸に届いて腸内フローラのバランスを改善し、健康に有益な効果をもたらす微生物のことです。",
        difficulty: "中級", category: "栄養"
    },
    {
        question: "ロイシンが筋タンパク質合成において特に重要とされる理由は何ですか？",
        answers: [ { text: "最もエネルギー価が高いから", correct: false }, { text: "筋タンパク合成を開始させる重要なシグナル伝達経路（mTOR経路）を活性化するスイッチの役割を果たすから", correct: true }, { text: "体内で唯一合成できないアミノ酸だから", correct: false }, { text: "脂肪の燃焼を直接促進するから", correct: false } ],
        explanation: "BCAAの中でも特にロイシンは、単に筋タンパク質の材料となるだけでなく、mTOR（哺乳類ラパマイシン標的タンパク質）という、細胞の成長やタンパク質合成をコントロールする重要な経路を活性化する強力なシグナル分子として働くため、特に重要視されています。",
        difficulty: "上級", category: "栄養"
    }
];
