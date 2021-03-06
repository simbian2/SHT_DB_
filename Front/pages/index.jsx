import Tab from '../components/Tab'
import Tab2 from '../components/Tab2'
import Notice from '../components/Notice'
import Supply from '../components/Supply'
import Feedback from '../components/Feedback'

const Index = () => {
    return (
        <>
            <div className="site_wrap">
                <h1 className="indexTitle">π‘ μ ν¬ν κ°μ  λμ°λ―Έ π‘</h1>
                <Supply />
                <Notice />
                <div className="wrap">
                    <Tab />
                    <Tab2 />
                </div>
                <a href="https://apply.lh.or.kr/#"><input className="GoTo" type="button" value="μ²­μ½νλ¬κ°κΈ°" /></a>
                <Feedback />
        <div className="site_wrap">
            <h1 className="indexTitle">π‘μ ν¬ν κ°μ  λμ°λ―Έπ‘</h1>
            <Supply />
            <Notice />
            <div className="wrap">
                <Tab />
                <Tab2 />
            </div>
        </>
    )
}

export default Index
