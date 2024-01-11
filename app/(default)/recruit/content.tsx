import Image from 'next/image'
import SingleImage from '@/public/images/wof-single.jpg'

export default function LessonsContent() {  
  return (
    <section className="bg-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2">
        <div className="pb-12 md:pb-20">

          <div className="max-w-3xl mx-auto">
            <div className="text-lg text-slate-500 mt-20">
              <h2 className="h3 font-playfair-display text-slate-800 mb-12 mt-12 text-center">人才招募</h2>
              <p className="mb-8">
              专业、逻辑和质量是确保软件产品成功的三大关键要素，知识分享和持续学习是团队成员可
              以共同成长，不断改进和提升工作成效，并确保产品的可靠性和稳定性。OLINTEK将这三大要
              素融入企业的文化中，并赋予团队成员相应的价值观，有助于创造出更优秀的软件产品，并
              在国际市场中取得成功。
              </p>
              <p className="mb-8">
              本公司目前有以下职缺：( 请备详细履历表并注明应征项目 )
              </p>
              <p className="mb-8">
              1. 运算引擎研发工程师 ：熟C / C++、启发式算法、作业研究( OR )、NP问题者， ( 硕士以上毕业，欢迎应届毕业生 )
              </p>
              <p className="mb-8">
              2. 系统设计开发工程师 ：熟 .NET、C#、JAVA、MS-SQL、MySQL者( 大学以上毕业，欢迎应届毕业生 )
              </p>
              <p className="mb-8">
              3. 客户经理：
              </p>
              <p>
              (1) 实际面对客户与客户建立并维系牢固、信任的关系。
              </p>
              <p>
              (2) 根据客户需求与目标，厘清需求并成功地交付解决方案。
              </p>
              <p>
              (3) 服务现有客户的过程中，积极寻求新的业务与销售机会。
              </p>
              <p className='mt-8'>
                应征履历请寄：<strong>Service@olintek.com</strong>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}